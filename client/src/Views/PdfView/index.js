import React, { Component } from 'react';

import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import {getBuilding} from './../../Services/otherServices'
import './style.scss';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft:20,
    marginTop: 120
    
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  header: {
    marginTop:15,
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft:20,
    
  },
  name: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft:20,
    marginTop: 40
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  text:{
    fontSize: 15,
    textAlign: 'left',
    
    margin : 20,
    marginBottom: 40
    
  },
  banckAccount:{
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10
    
    
  },

  bye:{
    fontSize: 15,
    textAlign: 'right',
    marginRight: 30,
    marginTop: 60
  },
   pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});


class PdfViews extends Component {
    constructor(props) {
      super(props);
      this.state = {
        building :[]
       
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      getBuilding(this.props.location.state.buildingId)
        .then(building => {
          this.setState({
            building
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    render() {
      let pr =  this.props.location.state
      console.log('This is the props', this.state.building)
      return (
        <PDFViewer className='pdfView'>
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.header}>
        <Text>{pr.title}</Text>
      </View> 
    <View style={styles.title}>
        <Text>{this.state.building.name}</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>{this.state.building.address}</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>{pr.month}</Text>
      </View>
      <View style={styles.name}>
      <Text>Dear {this.props.user.name},</Text>
      </View>
      <View style={styles.text}>
      <Text>The payment quote for the period above mentioned, is {pr.amount} € and should be paid doing a transfer to the Bank account below.</Text>
      </View>
      <View style={styles.banckAccount}>
        <Text>Bank Account details</Text>
        </View>
      <View style={styles.banckAccount}>
      <Text>Name : {pr.bankAccountName}</Text>
        <Text>NIF: {pr.nif}</Text>
      </View>
      <View style={styles.bye}>
        <Text>At your disposal,</Text>
        <Text>Administrator</Text>
      </View>
      

    </Page>
    
  </Document>
  </PDFViewer>
      );
    }
  }
  
  export default PdfViews;