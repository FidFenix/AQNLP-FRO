import React, {Component} from 'react';
import FormInput from './../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { authenticationService } from '../../services/user/auth.service';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

import './sign-up.content.styles.scss';

class SignUpContComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { fullName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        //authenticationService.signup(fullName, email, country.label, language, password);
        //return {};
        //console.log(fullName, email, country.label, language, password);
        //const { signUpStart } = this.props;
        //signUpStart(email, password, displayName);
        
        //ALL THIS CODE INTO REDUX SAGA
        try {
            const user = await authenticationService.signup(
                fullName, 
                email, 
                password
            );
            
            this.props.setCurrentUser(user.name? user:undefined);

            this.setState({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    changeHandler = (country) => {
        this.setState({ country: country , language: country.value})
    }

    render() {
        const {fullName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>No tengo una cuenta personal</h2>
                <span>Deseo crear una nueva cuenta</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'fullName'
                        value = {fullName}
                        onChange={this.handleChange}
                        label='nombre completo'
                        required
                    />
                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange={this.handleChange}
                        label='correo'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange={this.handleChange}
                        label='contraseña'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='repetir contraseña'
                        required
                    />
                    <CustomButton type='submit'>REGISTRARME</CustomButton>
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignUpContComp);