import { createAction } from 'redux-actions';
import * as TYPE from './home.types';

export const getUserDetailsEpics = createAction(
  TYPE.GET_USER_DETAILS_EPIC,
);

export const getUserDetailsSucceeded = createAction(
  TYPE.GET_USER_DETAILS_SUCCEEDED,
);

export const getUserDetailsFailed = createAction(
  TYPE.GET_USER_DETAILS_FAILED,
);

export const getUserDetailsCancel = createAction(
  TYPE.GET_USER_DETAILS_CANCEL,
);

export const getUserDetailsReading = createAction(
  TYPE.GET_USER_DETAILS_READING,
);