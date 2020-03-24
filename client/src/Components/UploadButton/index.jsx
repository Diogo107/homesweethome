import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './style.scss'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  const imageChange = (event) =>{
    console.log('im running')
    props.imageChange(event)
  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange = {e =>imageChange(e)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" size="large" color="primary" startIcon={<CloudUploadIcon />} component="span">
          Upload
        </Button>
      </label>
      
      {/*}
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange = {(e)=>imageChange(encodeURI)}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      */}
      
    </div>
  );
}