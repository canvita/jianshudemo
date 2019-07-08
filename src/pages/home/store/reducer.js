import { fromJS, List } from "immutable";
import { constants } from './index'
const defaultState = fromJS(
  {
    banner: '',
    List: [],
    articles: [],
    writters: []
  }
);

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_HOME_DATA:
      return state.merge({
        banner: action.data.banner,
        List: List(action.data.List),
        articles: List(action.data.articles),
        writters: List(action.data.writters)
      })
    default: 
      return state
  }
}