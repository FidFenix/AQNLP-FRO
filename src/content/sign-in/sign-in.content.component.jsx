
import React, { Component } from 'react';

import './sign-in.content.styles.scss';
import FormInput from './../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

import { authenticationService } from '../../services/user/auth.service';

class SignInContComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event=> {
        event.preventDefault(); // to prevent submitting

        const { setCurrentUser } = this.props;
        const { email, password } = this.state;

        try {
            const user = await authenticationService.login(email, password);
            setCurrentUser(user.name? user:undefined);
        }catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})  //like a mirror, dinamically
    } 
    render() {
        return(
            <div className='sign-in'>
                <h2 className = 'title'>Sí ya esta registrado</h2>
                <span>Ingrese con su correo y contraseña</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        label='correo'
                        required
                    ></FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='contraseña'
                        required
                        handleChange = {this.handleChange}
                    ></FormInput>
                    <div className='buttons'>
                        <CustomButton type="submit">INGRESAR</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignInContComp);