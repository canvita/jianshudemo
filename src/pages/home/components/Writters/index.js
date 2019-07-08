import React from 'react';
import { WritterWrapper, WritterItem } from './style'
export default props => {
  return (
    <WritterWrapper>
      <div>
        <span className="left">推荐作者</span>
        <span className="right">换一批</span>
        <br/>
      </div>
      {
        props.data.map(item => (
          <WritterItem key={item.id}>
            <img
              className="avator" 
              src={item.url}
            />
            <div className="content">
            <div className="name">{item.name}</div>
            <span className="meta">写了{item.fonts}字</span>
            <span className="meta">{item.likes}喜欢</span>
            </div>
            
            <span className="subscribe">+关注</span>
          </WritterItem>
        ))
      }
    </WritterWrapper>
  )
}