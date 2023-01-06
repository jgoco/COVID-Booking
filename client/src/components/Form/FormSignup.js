import React from 'react'
import {Button} from '../Button/Button';
import useForm from './useForm';

function FormSignup({submitForm}) {
    const {handleChange, handleSubmit, formValues} = useForm(submitForm);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1> Start booking your classes today by signing up below.</h1>
                <div className="form-inputs">
                    <label htmlFor="firstname" className="form-label"> First Name </label>
                    <input id='firstname' type="text" name="firstname" className='form-input' placeholder='First Name' value={formValues.firstname} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label"> Last Name </label>
                    <input id='lastname' type="text" name="lastname" className='form-input' placeholder='Last Name' value={formValues.lastname} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label"> Email </label>
                    <input id='email' type="email" name="email" className='form-input' placeholder='Email' value={formValues.email} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label"> Password </label>
                    <input id='password' type="password" name="password" className='form-input' placeholder='Password' value={formValues.password} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="firstdose" className="form-label"> First Dose </label>
                    <input id='firstdose' type="text" name="firstdose" className='form-input' placeholder='Date of first vaccine dose. Blank if not yet received.' value={formValues.firstdose} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="seconddose" className="form-label"> Second Dose </label>
                    <input id='seconddose' type="text" name="seconddose" className='form-input' placeholder='Date of second vaccine dose. Blank if not yet received.' value={formValues.seconddose} onChange={handleChange}/>
                </div>
                <Button className="form-input-btn" type="submit">
                    Sign Up
                </Button>
                <span className="form-input-login"> Already have an account? Login  
                    <a href='#'>
                        here
                    </a>
                </span>
            </form>
        </div>
    );
}

export default FormSignup;
