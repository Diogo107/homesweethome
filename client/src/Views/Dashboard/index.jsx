import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostsView from './../posts/viewPosts'
import AnnoucementsView from './../ViewAnnoucements'
import DocsView from './../Documents/ViewDocuments'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    console.log('Dashboard inside', this.props);
    this.setState({
      user: this.props.user,
      loaded: true
    });
  }

  render() {
    return (
      <div>
        {(this.state.loaded && (
          <>
            <h1>Hello {this.state.user.name}</h1>

            <h5>In here will appear all the docs and maybe some graphs</h5>
          </>
        )) ||
          ''}

          <div>
            <h1>my path</h1>
             <PostsView />}
             <AnnoucementsView/>
             <DocsView/>
                     
          </div>
      </div>
    );
  }
}
