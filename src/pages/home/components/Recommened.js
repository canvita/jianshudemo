import React, { PureComponent } from 'react';
import { RecommenedWrapper, RecommenedItem } from '../styled'

class Recommened extends PureComponent {

  render() {
    let jsList = this.props.recommenedList.toJS();
    return (
      <RecommenedWrapper>
        { 
          jsList.map(item => (
            <RecommenedItem key={item.id} imgUrl={item.imgUrl}>
            </RecommenedItem>
            
          )) 
        }
        
      </RecommenedWrapper>
    )
  }
}

export default Recommened;
