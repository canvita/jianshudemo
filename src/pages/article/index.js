import Loadable from 'react-loadable';
import Loadding from '../../common/Loading'
import React, { PureComponent } from 'react'
const LoadableComponent = Loadable({
  loader: () => import('./detail'),
  loading: Loadding
})

export default class LoadableHome extends PureComponent{
  render() {
    return <LoadableComponent/>
  }
}