import React, { useEffect, useState } from 'react';
import '../style/Login.css';


const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [pass_word, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        console.log('login');
    };

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        const handleSignUp = () => container.classList.add('right-panel-active');
        const handleSignIn = () => container.classList.remove('right-panel-active');

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', handleSignUp);
            signInButton.addEventListener('click', handleSignIn);
        }

        return () => {
            if (signUpButton && signInButton) {
                signUpButton.removeEventListener('click', handleSignUp);
                signInButton.removeEventListener('click', handleSignIn);
            }
        };
    }, []);

    return (
        <div className="container-login" id="container">
            {/* Sign Up Form */}
            <div className="form-container sign-up-container">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            {/* Sign In Form */}
            <div className="form-container sign-in-container">
                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e)=> setEmail(e.target.value)} />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginComponent;