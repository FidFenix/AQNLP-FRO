import React, { Component } from 'react';
import BookLabelComp from '../../components/book-label/book-label.component';

class AsidePdfContComp extends Component {
   constructor(props) {
      super(props);
      this.state = {
         library: [
            {
               id: "1",
               title: "Los Comentarios Reales",
               description: "Loa incas y su tratamiento"
            },
            {
               id: "2",
               title: "Lord of the Ring",
               description: "Loa incas y su tratamiento"
            },
            {
               id: "3",
               title: "Caperucita Roja",
               description: "Loa incas y su tratamiento"
            },
            {
               id: "4",
               title: "Competitive Programming",
               description: "Loa incas y su tratamiento"
            },
            {
               id: "5",
               title: "Los Comentarios Reales",
               description: "Loa incas y su tratamiento"
            },
         ]
      }
   }
   
   render() {
      const { library } = this.state;
      return(
         <div className = 'aside-pdf-cont-context'>
            {
               library?
               library.map(({id, ...otherProps} )=>(
                  <BookLabelComp key = {id} {...otherProps}/>
               ))
               :
               null
            }
         </div>
      )
   }
}

export default AsidePdfContComp;