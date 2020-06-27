import React from 'react';

import './book-label.styles.scss';
const BookLabelComp = ({title, description}) => {
   console.log(title, description);
   return(
      <div className = 'book-label-context'>
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   )
}

export default BookLabelComp;