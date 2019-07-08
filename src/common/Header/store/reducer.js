import { constants } from './index'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  searchFoucs: '',
  tendingList: []
})

export default (state = defaultState ,action) => {
  switch(action.type) {
    case constants.FOUCS: 
      return state.set('searchFoucs', constants.FOUCS);
    case constants.BLUR: 
      return state.set('searchFoucs', constants.BLUR)
    case constants.SET_TRENDING: 
      return state.set('tendingList', fromJS(action.list));
    default:
      return state;
    
  }
}