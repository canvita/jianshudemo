import styled from 'styled-components';
export const Article = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 120px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  color: #999;
  font-size: 13px;
  line-height: 19px;
  .content {
    padding-right: 165px;
  }
  .title {
    color: #333;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    line-height: 27px;
    :hover {
      text-decoration: underline;
    }
  }
  .desp {
    margin: 10px 0;
  }
  .img {
    position: absolute;
    display: block;
    width: 150px;
    height: 100px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  .meta {
    margin-right: 10px;
  }
`