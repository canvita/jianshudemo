import React, { Component } from 'react';
import List from "./components/List";
import Recommened from "./components/Recommened";
import Writer from "./components/Writer";
import DownloadLink from './components/DownloadLink'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  Divider,
  ReadMore,
  WriterHeader
} from './styled'
import { actionCreators } from './store'
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount(){
    this.props.getHomeListFun()
  }

  render() {
    const { listList, recommenedList, writerList, LoadMore, switchWritersFun, page, totalPage, articlePage } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='pic' 
          src='//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
          className="banner-image" />
          <Divider></Divider>
          <List listList={listList}></List>
          <ReadMore onClick={() => LoadMore(articlePage)}>阅读更多</ReadMore>
        </HomeLeft>
        <HomeRight>
          <Recommened recommenedList={recommenedList}></Recommened>
          <DownloadLink></DownloadLink>
          <WriterHeader>
            <div className="title">
              <span>推荐作者</span>
              <div className="switch" onClick={() => switchWritersFun(page, totalPage, this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>换一批
              </div>
            </div>
          </WriterHeader>
          <Writer writerList={writerList} page={page} totalPage={totalPage}></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList']),
  recommenedList: state.getIn(['home', 'recommenedList']),
  listList: state.getIn(['home', 'listList']),
  writerList: state.getIn(['home', 'writerList']),
  page: state.getIn(['home', 'page']),
  totalPage: state.getIn(['home', 'totalPage']),
  articlePage: state.getIn(['home', 'articlePage']),
})

const mapDispatch = (dispatch) => ({
  getHomeListFun(){
    dispatch(actionCreators.getHomeList())
  },
  LoadMore(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  },
  switchWritersFun(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = `rotate(${originAngle + 360}deg)`
    const curPage = page < (totalPage - 1) 
    ? page + 1
    : 0
    dispatch(actionCreators.switchWriters(curPage));
  }
})

export default connect(mapState, mapDispatch)(Home);