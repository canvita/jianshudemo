import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavBtn,
  NavSearch,
  Trending,
  NavSearchWrapper,
  Span,
  TrendingItem
} from './style';
import { actionCreators, constants } from './store'

class Header extends PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    const { searchFoucs, tendingList, handleSearchFoucs, handleSearchBlur } = this.props; 
    return (<HeaderWrapper>
      <Nav>
      <Logo></Logo>
      <NavItem className="left active">首页</NavItem>
      <NavItem className="left">下载</NavItem>
      <NavSearchWrapper>
      <NavSearch 
        className={
          searchFoucs === constants.FOUCS ? 
          'foucs' : searchFoucs === constants.BLUR ?
          'blur' : ''
        }
        onFocus={() => handleSearchFoucs(tendingList.size)}
        onBlur={handleSearchBlur}
      />
      <Trending show={searchFoucs === constants.FOUCS}>
        <Span className="left">热门搜索</Span>
        <Span className="right">换一批</Span>
        <br />
        {
          tendingList.map(item => (
            <TrendingItem key={item}>{item}</TrendingItem>
          ))
        }
      </Trending>
      </NavSearchWrapper>
      <NavBtn className="writting">写文章</NavBtn>
      <NavBtn className="sign-up">注册</NavBtn>
      <NavItem className="right">登录</NavItem>
      <NavItem className="right">Aa</NavItem>
      </Nav>
    </HeaderWrapper>)
  }
}

const stateToProps = state => ({
  searchFoucs: state.getIn(['header','searchFoucs']),
  tendingList: state.getIn(['header','tendingList'])
})

const dispathToProps = dispatch => ({
  handleSearchFoucs(size) {
    if (size === 0) {
      dispatch(actionCreators.getTrendingListAction());
    }
    dispatch(actionCreators.searchFocusAction());
  },
  handleSearchBlur() {
    dispatch(actionCreators.searchBlurAction());
  }
})

export default connect(stateToProps, dispathToProps)(Header);