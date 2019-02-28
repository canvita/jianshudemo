import {
  fromJS
} from 'immutable';
import {
  constants
} from './'

const defaultState = fromJS({
  topicList: [],
  listList: [],
  recommenedList: [],
  writerList: [],
  totalPage: 0,
  page: 0,
  articlePage: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME:
      return state.merge({
        'topicList': action.topicList,
        'listList': action.listList,
        'recommenedList': action.recommenedList,
        'writerList': action.writerList,
        'totalPage': action.totalPage
      });
    case constants.GET_MORE:
      return state.merge({
        'listList': state.get('listList').concat(action.value),
        'articlePage': action.articlePage
      })
    case constants.SWITCH_WRITER:
      return state.set('page', action.page)
    default:
      return state
  }
}