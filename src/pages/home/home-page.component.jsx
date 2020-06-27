import React, { Component } from 'react';
import './home-page.styles.scss';
import './book.css';

import { connect } from 'react-redux';
import { setCurrentUser } from './../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors';

class HomePageComp extends Component {
   
   responseFacebook = (response) => {
      const { setCurrentUser } = this.props;
      setCurrentUser(response);
   }

   componentClicked = () => {

   }

   render() {
      const { history, match} = this.props;
      return (
            <div className='home-page'>
            <div className='left-container'>
            <article className="notepad">
               <p>This is zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.</p>
   
               <p>Here are the vegetables required:</p>
               <ul>
                  <li>Potato</li>
                  <li>Carrot</li>
                  <li>Broccoli</li>
                  <li>Potato</li>
                  <li>Carrot</li>
                  <li>Broccoli</li>
               </ul>
            </article>
            </div>
            { !this.props.currentUser?
                <div className='right-container'>
                   <div className = 'sheet-paper'
                        onClick = {()=> history.push( `${match.url}signin`)}
                   ><span>Ingresar</span>
                   </div>
                   <div className = 'sheet-paper'>
                   </div>
                </div>
                :
                null
            }
         </div>
      )
   }

}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageComp);