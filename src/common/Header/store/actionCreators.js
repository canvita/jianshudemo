import { constants } from './index';
import axios from 'axios';
export default {
  searchBlurAction() {
    return {
      type: constants.BLUR
    }
  },
  searchFocusAction() {
    return {
      type: constants.FOUCS
    }
  },
  setTrendingListAction(list) {
    return {
      type: constants.SET_TRENDING,
      list
    }
  },
  getTrendingListAction() {
    return dispatch => {
      axios.get('/api/tredingList.json').then(res => {
        console.log(res);
        dispatch(this.setTrendingListAction(res.data));
      })
    }
  }

}