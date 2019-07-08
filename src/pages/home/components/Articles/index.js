import React from 'react';
import { Article } from './style'
import { Link } from 'react-router-dom';
export default props => {
  const { id, title, desp, url, value, writter, comments, likes } = props.data;
  return(
    <Article>
      <div className="content">
        <Link to={`/article/:${id}`} className="title">{title}</Link>
        <p className="desp">
         {desp} 
        </p> 
        <div>
          <span className="meta">{value}</span>
          <span className="meta">{writter}</span>
          <span className="meta">{comments}</span>
          <span className="meta">{likes}</span>
        </div>
      </div>
      <img className="img" src={url} />  
    </Article>
  )
}