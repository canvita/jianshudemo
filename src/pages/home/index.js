import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { 
  Banner,
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import Articles from './components/Articles';
import List from './components/List'
import Writters from './components/Writters';

import { actionCreator } from './store';

class Home extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    let { banner, list, articles, writters } = this.props;
    console.log('home-render');
    return(
      <HomeWrapper>
        <HomeLeft>
          <Banner src={banner} />
          <div>
            {
              articles.map(item => (
                <Articles key={item.id} data={item}></Articles>
              ))  
            }
          </div>
        </HomeLeft>
        <HomeRight>
          <List data={list}/>
          <Writters data={writters}/>
        </HomeRight>
      </HomeWrapper> 
    )
  }
  componentDidMount() {
    this.props.getData();
  }
}

const mapState = state => ({
  banner: state.getIn(['home','banner']),
  list: state.getIn(['home', 'List']),
  articles: state.getIn(['home', 'articles']),
  writters: state.getIn(['home', 'writters'])
})

const mapDispath = dispatch => ({
  getData() {
    dispatch(actionCreator.getHomeDataAction());
  }
})

export default connect(mapState, mapDispath)(Home) ;