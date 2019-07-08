import styled from 'styled-components';


export const WritterWrapper = styled.div`
  overflow: hidden;
  color: #969696;
  font-size: 14px;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
`

export const WritterItem = styled.div`
 position: relative;
 height: 50px;
 margin: 10px 0;
 line-height:25px;
  .avator {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .content {
    padding-left: 55px;
  }
  .name {
    color: #333;
  }
  .meta {
    margin-right: 5px;
  }
  .subscribe {
    position: absolute;
    right: 0;
    top: 0;
    color: #42c02e;
  }
`