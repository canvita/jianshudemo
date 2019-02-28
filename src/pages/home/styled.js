import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 400px;
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #dcdcdc;
`

export const HomeLeft = styled.div`
  float:left;
  margin: 30px 0 0 15px;
  width: 625px;
  .banner-image {
    height: 270px;
    width: 625px;
    margin-bottom: 30px;
    border-radius: 5px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin: 30px 0 0 15px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 5px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float:left;
  height: 32px;
  margin-bottom: 10px;
  margin-left: 18px;
  padding-right: 10px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .item-image {
    display:block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 5px;
  }
`

export const ListInfo = styled.div`
  width: 490px;
  float: left;
  .titel {
    margin: -7px 0 4px 0;
    line-height: 27px;
    text-decoration: none;
    font-size: 18px;
    color: #333;
    font-weight: 700;
  }
  .content {
    height: 48px;
    font-size: 13px;
    color: #999;
    line-height: 24px;
    margin: 0 0 8px;
  }
  .wrapper {
    display: inline-block;
    margin-right: 10px;
    line-height: 20px;
    vertical-align: middle;
    color: #b4b4b4;
    font-size: 12px;
  }
  .price {
    color: #ea6f5a!important;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 13px;
  }
`

export const ReadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  line-height: 40px;
  background-color: #a5a5a5;
  border-radius: 20px;
  text-align:  center;
  font-size: 15px;
  color: #fff;
  
`

export const RecommenedWrapper = styled.div`
  width: 280px;
  margin: -4px 0 0 0;
`

export const RecommenedItem = styled.a.attrs({
  href: '/'
})`
  display: block;
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl});
  background-size:contain;
  border-radius: 5px;
  cursor: pointer;
`

export const DownloadLinkWrapper = styled.a.attrs({
  href: '/'
})`
  box-sizing: border-box;
  display: block;
  width: 280px;
  padding: 10px 20px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  .qrcode {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
  }
  .content {
    display: inline-block;
    vertical-align: middle;
    margin-left:7px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .desp {
    margin-top: 4px;
    font-size: #999;
    font-size: 13px;
  }
`
export const WriterHeader = styled.div`
  overflow: hidden;
  width: 280px;
  margin-top: 30px;
  color: #969696;
  font-size: 14px;
  .switch {
    color: #969696;
    float: right;
    text-decoration: none;
    cursor: pointer;
  }
  .spin {
    display: block;
    float: left;
    font-size:12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 280px;
  color: #969696;
  font-size: 14px;
`

export const WriterItem = styled.div`
  position: relative;
  margin-top: 15px;
  line-height: 20px;
  .avator {
    display: inline-block;
    vertical-align: middle;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
  }
  .content {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
  .name {
    font-size: 14px;
    color: #333;
  }
  .desp {
    color: #969696;
    font-size: 12px;
  }
  .notice {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    color: #42c02e;
  }

`
