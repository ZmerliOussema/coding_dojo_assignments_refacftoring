import React, { useState } from 'react';

const Form = (porps) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [conPw, setconPw] = useState('')
    return (
        <div>
            <form>
                <div className='form-group'>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={(e) => setPw(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="conf-password">Confirm Password: </label>
                    <input type="password" onChange={(e) => setconPw(e.target.value)} />
                </div>
            </form>
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Password: {conPw}</p>
        </div>

    );
}

export default Form;
