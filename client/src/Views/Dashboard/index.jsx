import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostsView from './../posts/viewPosts';
import AnnoucementsView from './../ViewAnnoucements';
import DocsView from './../Documents/ViewDocuments';
import NeighborsView from './../../Components/DashboardNeighbors';
import FullWidthTabs from '../../Components/DashboardMobileTabs';
import CenteredTabs from '../../Components/DashboardTabs'

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
  
        <CenteredTabs />
        
  
    );
  }
}
