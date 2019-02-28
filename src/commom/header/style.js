import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position:relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position:absolute;
  top: 0;
  left:0;
  display: block;
  width: 100px;
  height: 58px;
  background: url('http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png');
  background-size: contain;
`;

export const Nav = styled.div`
width:960px;
height: 100%;
padding-right: 70px;
box-sizing: border-box;
margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 58px;
  height: 58px;
  color: #333;
  font-size: 18px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a
  }
  &.gray {
    color: #969696;
  }
`

export const NavSearchWrapper = styled.div`
  position:relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.facous {
      background: #777;
      color: #fff
    }
  }
`

export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 58px;
width: 240px;
padding: 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background: #fff;
`

export const SearchInfoTitle = styled.div`

margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`

export const SearchInfoSwitch = styled.span`
float:right;
font-size: 13px;
cursor: pointer;
.spin {
  display: block;
  float: left;
  font-size:12px;
  margin-right: 2px;
  transition: all .2s ease-in;
  transform-origin: center center;
}
`

export const SearchInfoItem = styled.a`
display: block;
float: left;
padding: 0 5px;
margin:5px;
line-height:20px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`


export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  float: left;
  width: 160px;
  height: 38px;
  margin: 10px 0 0 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  color:#666;
  border: none;
  outline: none;
  border-radius: 19px;
  background:#eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.facous {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
position: absolute;
right:0;
top:0;
height: 58px;
`

export const Button = styled.div`
float: right;
height: 38px;
margin-top: 10px;
margin-right: 20px;
padding: 0 20px;
line-height: 38px;
border-radius: 19px;
border: 1px solid #ec6149;
&.reg {
  color: #ea6f5a;
}
&.writting {
  color: #fff;
  background: #ea6f5a;
}
`