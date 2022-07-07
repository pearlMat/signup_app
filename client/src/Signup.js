import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signup } from "./actions/auth";

import { toast } from 'react-toastify';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { name, password, buttonText } = values;

    const handleChange = name => event => {
       
        setValues({ ...values, [name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        const user = { name, password };
       signup(user)
            .then(response => {
                if (response.error) {
                    toast(response.error);
                    setValues({ ...values, buttonText: 'Submit' });
                  } else {
                    toast("Registration successful. Please login.");
                    setValues({ ...values, name: '', password: '', buttonText: 'Submitted' });
                  }
               
            })
            
    };
    
    const signupForm = () => (
        <form>
           
           <div className='field-container'>
                  <input
                    type='text'
                    value={name}
                    onChange={handleChange('name')} 
                    className='form-field'
                    placeholder='Name'
                  />
                </div>
                <div className='field-container'>
                  <input
                    type='password'
                    value={password}
                    onChange={handleChange('password')} 
                    className='form-field password'
                    placeholder='Password'
                  />
                </div>
                <div className='mt-4 pt-4'>
                  <a className='reset-link' href='#'>
                    Forgot/Reset Password ?
                  </a>
                </div>
                <div className='btn-login mt-5 pt-5'>
                
                <button className="button" onClick={submitForm}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
       
            <div className="col-md-6 offset-md-3">
              
                
                {signupForm()}
            </div>
        
    );
};

export default Signup;