import React from 'react';

import { ListItem, ListWrapper } from './style'
export default props => {
  return (
    <ListWrapper>
      {
        props.data.map((item, index) => <ListItem key={index} src={item} />)
      }
    </ListWrapper>
  )
}