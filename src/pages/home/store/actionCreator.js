import { constants } from './index';
import axios from 'axios';
export default {
  getHomeDataAction() {
    return dispatch => {
      axios.get('/homeData.json').then(res => {
        const action = {
          type: constants.GET_HOME_DATA,
          data: res.data
        };
        dispatch(action);
      })
    }
  },
}