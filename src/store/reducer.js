import { reducer as HeaderReducer } from '../common/Header/store';
import { reducer as HomeReducer } from '../pages/home/store'
import { combineReducers } from 'redux-immutable';

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer
})