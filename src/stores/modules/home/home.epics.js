import * as Types from './home.types';
import notification from 'antd/lib/notification'
import { Observable } from 'rxjs';
import { getUserDetailsSucceeded } from './home.actions'

export const getUserDetailsEpic = action$ =>
  action$.ofType(Types.GET_USER_DETAILS_EPIC).switchMap(action => {
    const requestBody = {
      query: `
      query {
        getUserDetails(_id:"${action.payload}"), {
          _id
          email
          firstName
          lastName
        }
      }
      `
    };
    const options = {
      method: "POST",
      url: "http://localhost:3002/graphql",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    };
    const request = Observable.ajax(options)
      .map(result => {
        if (result.response.errors) {
          notification.error({
            message: 'Cannot get user details',
            description: result.response.errors[0].message
          })
          return
        }
        return getUserDetailsSucceeded(result.response.data.getUserDetails)
      })
      .catch(error => {
        console.log(error)
        return error
      })
    return request

  })
