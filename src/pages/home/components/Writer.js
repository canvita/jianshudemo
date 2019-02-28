import React, { PureComponent }  from 'react';

import { WriterWrapper, WriterItem } from '../styled'

class Writer extends PureComponent {

  render() {
    const jsList = this.props.writerList.toJS();
    const { page } = this.props;
    return (
      <WriterWrapper>
        {
          this.getItems(jsList, page)
        }
      </WriterWrapper>
    )   
  }

  getItems = (jsList, page) => {
    const arr = [];
    for(let i = page * 5; i < (page + 1) *5; i++) {
      let item = jsList[i]
      if (item) {
        arr.push(
          <WriterItem key={item.id}>
          <img alt='' className="avator"
          src={item.avatorUrl}
          />
          <div className="content">
            <div className="name">{item.name}</div>
            <div className="desp">写了{item.font}字 · {item.like}喜欢</div>
          </div>
          <a className="notice" href="/">+关注</a>
        </WriterItem>
        )
      }
    }
    return arr;
  }
}

export default Writer;
