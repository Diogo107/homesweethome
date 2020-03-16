import React, { Component } from 'react';
import SinglePost from './../../../Components/singlePost';
import './style.scss';

import { list } from './../../../Services/otherServices';

class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    list()
      .then(posts => {
        this.setState({
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log('hehe', this.state.posts)
    return (
      <div>
        <div className="post__list">
          {this.state.posts.map(post => (
            <SinglePost key={post._id} {...post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostsView;