import React, { PureComponent } from 'react';
import { Article } from './style'
import { Link } from 'react-router-dom';

export default class Articles extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, content, imgURL, price, writer, comment, like } = this.props.data;
    return(
      <Article>
        <div className="content">
          <Link to={`/article/${id}`} className="title">{title}</Link>
          <p className="desp">
           {content} 
          </p> 
          <div>
            <span className="meta">{price}</span>
            <span className="meta">{writer}</span>
            <span className="meta">{comment}</span>
            <span className="meta">{like}</span>
          </div>
        </div>
        <img className="img" src={imgURL} />  
      </Article>
    )
  }
}