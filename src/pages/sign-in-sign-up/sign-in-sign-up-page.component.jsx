import React from 'react';
import SignInContComp from './../../content/sign-in/sign-in.content.component';
import SignUpContComp from './../../content/sign-up/sign-up.content.component';


import './sign-in-sign-up-page.styles.scss';

const SignInAndSignUpPageComp = () => (
   <div className='container-wall'>
    <div className='sign-in-and-sign-up'>
       <SignInContComp/>
       <SignUpContComp/>
    </div>
    </div>
);

export default SignInAndSignUpPageComp;