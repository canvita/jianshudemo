import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from "../styled";
import like from '../../../static/like.svg';
import comments from '../../../static/comments.svg';
import price from '../../../static/price.svg';
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const jsList = this.props.listList.toJS();
    return (
      <div>
        { jsList.map((item) => {
          return (
            <Link key={item.id} to='/detail'>
              <ListItem>
                <img className="pic"
                alt="图片"
                src={item.imgURL}
                />
                <ListInfo>
                  <span href="/" className="titel">{item.title}</span>
                  <p className="content">{item.content}</p>
                  <span className="wrapper price"><img alt='' className="icon" src={price} /> {item.price}</span>
                  <span className="wrapper">{item.writer}</span>
                  <span className="wrapper"><img alt='' className="icon" src={comments} /> {item.comment}</span>
                  <span className="wrapper"><img alt='' className="icon" src={like} /> {item.like}</span>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })
        }
      </div>
    )
  }
}

export default List;
