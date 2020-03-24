
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import logo from '../../asset/images/logo.png';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './style.scss'
import logot from '../../asset/images/document.png'
import Logoff from '../SignOutTest'

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    top: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="mobile__sidebar">

          <div>
          <img className="sidebar__logo" src={logo} alt="logo" />
           </div>

        
        <div className="test__item">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="test__item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="test__item">
          <Link to="/post">New Post</Link>
        </div>
        <div className="test__item">
          <Link to="/services">Services</Link>
        </div>
        <div className="test__item">
          <Link to="/insert-bill">Insert Bill</Link>
        </div>
        <div className="test__item">
          <Link to="/manage-building">Manage Building</Link>
        </div>
        <div className="test__item">
          <Link to="/schedule">Schedule</Link>
        </div>
        <div className="test__item">
          <Link to="/create-announcement">Create Announcement</Link>
        </div>
        <div className="test__item">
          <Link to="/create-document">Create Document</Link>
        </div>
        <div className="test__item">
          <Link to="/create-services">Create Service</Link>
        </div>
        
          <Logoff />
        
        </div>
        
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>☰</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}