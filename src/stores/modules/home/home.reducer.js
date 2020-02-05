import { handleActions } from 'redux-actions';
import * as ACTION from './home.actions';
import Model from './home.model';

export default handleActions(
  {
    [ACTION.getUserDetailsSucceeded]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  Model,
);
