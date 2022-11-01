import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/loginin.scss';
function LoginIn() {
    return (
        <>


            <div>

                <div className="container">
                    <div className="form sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="https://t.me/Azizbek_Zikirov"><i className="fab fa-facebook-f" /></a>
                                <a href="https://t.me/Azizbek_Zikirov"><i className="fab fa-linkedin-in" /></a>
                                <a href="https://t.me/Azizbek_Zikirov"><i className="fab fa-google-plus-g" /></a>
                            </div>
                            <input type="email" placeholder="User Email" />
                            <input type="password" placeholder="Password" />
                            <a href="https://rpbloggers.com/">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Sign UP</h1>
                                <p>Sign up here if you don't have account.</p>
                                <Link to='/' ><Button variant="outlined">Sign UP</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginIn;