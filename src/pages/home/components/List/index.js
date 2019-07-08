import React, { PureComponent } from 'react';

import { ListItem, ListWrapper } from './style'
export default class List extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ListWrapper>
        {
          this.props.data.map((item, index) => <ListItem key={item.id} src={item.url} />)
        }
      </ListWrapper>
    )
  }
}