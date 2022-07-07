import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signin } from "./actions/auth";

import { toast } from 'react-toastify';

const Signin = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Login'
    });

    const { name, password, buttonText } = values;

    const handleChange = name => event => {
       
        setValues({ ...values, [name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        const user = { name, password };
       signin(user)
            .then(response => {
               
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'LoggedIn' });
                toast.success(response.data.message);
            })
            .catch(error => {
                
                setValues({ ...values, buttonText: 'Login' });
                toast.error(error.response.data.error);
            });
    };
    
    const signinForm = () => (

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
              
                
                {signinForm()}
            </div>
        
    );
};

export default Signin;