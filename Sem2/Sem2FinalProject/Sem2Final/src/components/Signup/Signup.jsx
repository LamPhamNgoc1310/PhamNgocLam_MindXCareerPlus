import React from 'react'
import './Signup.css'
import Navbar from '../Layout/Navbar'

export default function Signup() {
    return (
        <div className='loginBody'>
            <Navbar/>
            <div class="container">
                <form action="" id="form">
                    <h1>Registration Form</h1>
                    <div class="box">
                        <label for="username">Username</label>
                        <input id="username" name="username" type="text"/>
                            <div class="error"></div>
                    </div>
                    <div class="box">
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password"/>
                            <div class="error"></div>
                    </div>
                    <div class="box">
                        <label for="password">Confirm Password</label>
                        <input id="psw" name="psw" type="password"/>
                            <div class="error"></div>
                    </div>
                    <button type="submit" id="btn">Register Now</button>
                    <div class="link">
                        <a href="login.html">Already have an account</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
