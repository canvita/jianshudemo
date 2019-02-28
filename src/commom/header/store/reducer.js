import { actionTypes } from './';
import { fromJS } from 'immutable'

//转化为immutable类型对象
const defalutState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
})

export default (state = defalutState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false); 
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        'list': action.value,
        'totalPage': action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}