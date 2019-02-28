import { 
  actionTypes
} from './';
import axios  from 'axios';
import { fromJS } from 'immutable'


const changeListAction = (value) => ({
  type: actionTypes.CHANGE_LIST,
  value: fromJS(value),
  totalPage: Math.ceil(value.length / 10)
})


export const getSearchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getSearchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const getMouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const getMouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const getChangePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const getList = () => {
  return ((dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      if (data.success) {
        dispatch(changeListAction(data.data));
      }
    }).catch((err) => {
      console.log(err);
    })
  })
}