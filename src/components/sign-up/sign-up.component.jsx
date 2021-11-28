import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords don\'t match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })   
        } catch (error) {
            console.error(error);
        }

    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span className="title"> Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}> 
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Display Name'
                        handleChange={this.handleChange}
                        value={displayName}
                        required
                    />
                    <FormInput 
                        name="email" 
                        type="email"  
                        label="Email" 
                        handleChange={this.handleChange}
                        value={email} 
                        required
                    /> 
                    
                    <FormInput 
                        name="password"
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={password}
                        required
                    />
                    
                    <FormInput 
                        name="confirmPassword"
                        type='password'
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type='submit' onClick={this.handleSubmit}>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;