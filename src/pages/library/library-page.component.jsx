import React, { Component } from 'react';
import AsidePdfContComp from '../../content/aside-pdf/aside-pdf.content.component';
import ViewPdfContComp from '../../content/view-pdf/view-pdf.content.comp';


import './library-page.styles.scss';

class LibraryContComp extends Component {
   render() {
      return(
         <div className = 'library-page-context'>
            <AsidePdfContComp/>
            <ViewPdfContComp/>
         </div>
      )
   }
}

export default LibraryContComp;