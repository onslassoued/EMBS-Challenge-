import React from 'react'
import img1 from './images/logoheartsremoved.png'
import { useState } from 'react';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className='login'>
            <div className='loginfor'>
                <div className='image'>
                    <img src={img1} className='image'></img>
                </div>
                <h3>Health Aid Initiative</h3>
                <p className='quote'>We support DOCTORS in managing their practices more effectively . Our comprehensive solution allows them to dedicate more time to what tryly matters -their PATIENT .</p>
            </div>
            <form onSubmit={handleSubmit} className='form'>


                <label>

                    <input type="email" value={email} onChange={handleEmailChange} placeholder=' Email' className='border' />
                </label>

                <label>

                    <input type="password" value={password} onChange={handlePasswordChange} placeholder=' Password' className='border' />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LogIn;


