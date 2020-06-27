import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";

import './view-pdf.styles.scss';
class ViewPdfContComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         numPages: null,
         pageNumber: 1
      }
   }
   
   onDocumentSuccess = ({ numPages }) => {
      this.setState({ numPages });
   }
   goToPreviuosPage = () => {
      //this.setState(this.state => ({ pageNumber: this.state.pageNumber - 1}));
      this.setState({ pageNumber: this.state.pageNumber - 1});
   }
   goToNextPage = () => {
      //this.setState(this.state => ({ pageNumber: this.state.pageNumber + 1}));
      this.setState({ pageNumber: this.state.pageNumber + 1});
   }

   render() {
      const { pageNumber, numPages } = this.state;
      return(
         <div className = 'view-pdf-container-context'>
            <nav>
               <button onClick = { this.goToPreviuosPage }>Prev</button>
               <button onClick = { this.goToPreviuosPage }>Next</button>
            </nav>
            <div style = {{ width: 600 }}>
               <Document>
                  file = '/example.pdf'
                  onLoadSuccess = {this.onDocumentSuccess}
                  <Page pageNumber={pageNumber} width={600}>
                  </Page>
               </Document>
            </div>
            <div>
               <p>
               Page { pageNumber } of { numPages }
               </p>
            </div>
         </div>
      )
   }
}

export default ViewPdfContComp;