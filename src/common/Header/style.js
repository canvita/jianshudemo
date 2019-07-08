import styled from 'styled-components';
import logo from '../../static/nav-logo.png';
import { constants } from './store'
export const HeaderWrapper = styled.div`
  height: 55px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
`
export const Logo = styled.a`
  display: block;
  float: left;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`

export const Nav = styled.div`
  min-width: 768px;
  max-width: 1440px;
  height: 55px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  display: inline-block;
  margin: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #969696;
`

export const NavBtn = styled.div`
  float: right;
  border-radius: 20px;
  line-height: 36px;
  padding: 0 20px;
  margin: 10px 15px;
  &.sign-up {
    color: #ea6f5a;
    border: 1px solid #ea6f5a;
    background: #fff;
  }
  &.writting {
    color: #fff;
    border: 1px solid #ea6f5a;
    background: #ea6f5a;
  }
`
export const NavSearchWrapper = styled.div`
  float: left;
`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  box-sizing: border-box;
  width: 210px;
  height: 36px;
  margin: 10px 15px;
  padding: 0 40px 0 20px;
  border-radius: 20px;
  border: 0 solid transparent;
  background: #f0f0f0;
  &.foucs {
    border: none;
    outline: none;
    animation: searchFoucs .5s;
    width: 300px;
  }
  &.blur {
    animation: searchBlur .5s;
    width: 210px;
  }
  @keyframes searchFoucs {
      0% {
        width: 210px;
      }
      100% {
        width: 300px;
      }
  }
  @keyframes searchBlur {
    0% {
        width: 300px;
      }
      100% {
        width: 210px;
      }
  }
`
export const Trending = styled.div`
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    transform: translate(5px, -30px);
  }
  z-index: 10;
  position: absolute;
  width: 250px;
  margin: 0 15px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
  border-radius: 2px;
  background: #fff;
  font-size: 14px;
  color: #969696;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`
export const Span = styled.span`
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`
export const TrendingItem = styled.div` 
  display: inline-block;
  padding: 2px 6px;
  margin: 10px 10px 10px 0;
  border: rgb(180, 180, 180) 1px solid;
  border-radius: 2px;
  font-size: 12px;
`