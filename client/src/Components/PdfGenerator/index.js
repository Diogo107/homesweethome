import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const Pdfgen = props => (
  <PDFViewer>
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>hello</Text>
      </View>
      <View style={styles.section}>
        <Text>{props.nif}</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer>
);

export default Pdfgen;

