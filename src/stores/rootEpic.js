import { combineEpics } from 'redux-observable';
import * as Home from './modules/home/home.epics';
import 'rxjs'

const rootEpic = combineEpics(
  Home.getUserDetailsEpic
);

export default rootEpic;
