import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../styled';

class Topics extends PureComponent {
  render() {
    const jsList = this.props.topicList.toJS();
    return (
      <TopicWrapper>
        { jsList.map((item) => {
          return (
            <TopicItem key={item.id}>
              <img 
              alt={item.title}  
              className="item-image"
              src={item.imgURL}
              />
              {item.title}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}

export default Topics;
