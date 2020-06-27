import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderContComp from './content/header/header.content.component';
import HomePageComp from './pages/home/home-page.component';
import SignInAndSignUpPageComp from './pages/sign-in-sign-up/sign-in-sign-up-page.component';
import LibraryContComp from './pages/library/library-page.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import './App.styles.scss';

class App extends Component {
  render() {
    return(
      <div>
      <HeaderContComp/>
      <Switch>
        <Route exact path = '/' component = {HomePageComp}/>
        <Route exact path = '/library' component = {LibraryContComp}/>
        <Route exact path = '/signin' 
               render={()=> this.props.currentUser?
               (<Redirect to='/'/>): 
               (<SignInAndSignUpPageComp/>)}
        >
        </Route>
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
