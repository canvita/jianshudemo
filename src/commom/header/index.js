import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition, 
  Button, 
  NavSearchWrapper 
} from './style';
import { actionCreators } from './store/';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载</NavItem>
        <NavItem className='right gray'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavItem className='right gray'>登录</NavItem>
        <NavSearchWrapper>
          <CSSTransition
          in={focused}
          timeout={200}
          classNames='slide'
          >
            <NavSearch
            className={focused ? 'facous' : ''}
            onFocus={() => handleInputFocus(list)}
            onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>   
          <i className={focused ? 'facous iconfont zoom' : 'iconfont zoom'}>&#xe69d;</i>
          {this.getListArea()}
        </NavSearchWrapper>
        
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe61d;</i>写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea() {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length > 0) {
      for (let i = page * 10;i < (page + 1) * 10; i++) {
        if (jsList[i]) {
          pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
        }
      }
    }
    if (focused || mouseIn) {
      
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
           <SearchInfoTitle>
             热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>换一批
            </SearchInfoSwitch>
           </SearchInfoTitle>
           <div>
             {pageList}
          </div>
         </SearchInfo>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header','focused']),
  list: state.getIn(['header','list']),
  page: state.getIn(['header','page']),
  totalPage: state.getIn(['header','totalPage']),
  mouseIn: state.getIn(['header','mouseIn']),
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getList());
    dispatch(actionCreators.getSearchFocusAction());
  },
  handleInputBlur() {
    dispatch(actionCreators.getSearchBlurAction());
  },
  handleMouseEnter() {
    dispatch(actionCreators.getMouseEnterAction());
  },
  handleMouseLeave() {
    dispatch(actionCreators.getMouseLeaveAction());
  },
  handleChangePage(page, totalPage, spin) {
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
    dispatch(actionCreators.getChangePageAction(curPage));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);