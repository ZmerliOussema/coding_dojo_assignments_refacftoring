import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPw, setConfirmPw] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCorfirmPw = (e) => {
        setConfirmPw(e.target.value)
    }
    return (
        <div>
            <form className='bg-light text-dark'>
                <div className='p-3'>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" className='form-control' placeholder='Search' onChange={handleFirstName}/>
                    {
                        firstName.length < 2 && firstName.length > 0?
                        <small id="firstName-Validation" className="form-text text-muted">First Name must be at least 2 characters</small>:
                        null
                    }
                </div>
                <div className='form-group p-3'>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" className='form-control' placeholder='Search' onChange={handleLastName}/>
                    {
                        lastName.length < 2 && lastName.length > 0?
                        <small id="firstName-Validation" class="form-text text-muted">Last Name must be at least 2 characters</small>:
                        null
                    }
                </div>
                <div className='p-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" className='form-control' placeholder='Search' onChange={handleEmail}/>
                    {
                        email.length < 2 && email.length > 0?
                        <small id="firstName-Validation" className="form-text text-muted">Email must be at least 2 characters</small>:
                        null
                    }
                </div>
                <div className='p-3'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" className='form-control' placeholder='Search' onChange={handlePassword}/>
                    {
                        password.length < 8 &&  password.length > 0?
                        <small id="firstName-Validation" className="form-text text-muted">Password must be at least 8 characters</small>:
                        null
                    }
                </div>
                <div className='p-3'>
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <input type="password" className='form-control' placeholder='Search' onChange={handleCorfirmPw}/>
                    {
                        confirmPw !== password && confirmPw.length > 0?
                        <small id="firstName-Validation" className="form-text text-muted">Passwords must match</small>:
                        null
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;
