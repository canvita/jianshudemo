import { constants } from './';
import { fromJS } from 'immutable'
import axios from 'axios';

const getHomeListAction = (value) => ({
  type: constants.GET_HOME,
  totalPage: Math.ceil(value.writerList.length / 5),
  topicList: fromJS(value.topicList),
  listList: fromJS(value.listList),
  recommenedList: fromJS(value.recommenedList),
  writerList: fromJS(value.writerList)
  
})

const getMoreListAction = (value, articlePage) => ({
  type: constants.GET_MORE,
  value: fromJS(value),
  articlePage
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
       res.data.success && dispatch(getHomeListAction(res.data))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const getMoreList = (articlePage) => ((dispatch) => {
  axios.get('/api/moreList.json?paeg=' + articlePage).then(res => {
      res.data && dispatch(getMoreListAction(res.data, articlePage + 1))
  }).catch(err => {
    console.log(err);
  })
})

export const switchWriters = (page) => ({
  type: constants.SWITCH_WRITER,
  page
})
