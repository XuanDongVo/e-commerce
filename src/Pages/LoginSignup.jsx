import React, { useEffect, useState } from 'react';
import './CSS/LoginSignup.css';
import { loginUser, registerUser } from '../API/ApiClient';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import start_icon from '../assets/star_icon.png'; // Adjust the import as needed
// import start_dull_icon from '../assets/star_dull_icon.png'; // Adjust the import as needed

const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailOrUsername, setEmailOrUsername] = useState('');

  const navigation = useNavigate();

  console.log(username);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);
  useEffect(() => {
    const pwShowHide = document.querySelectorAll('.eye-icon');

    pwShowHide.forEach(eyeIcon => {
      eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password');

        pwFields.forEach(password => {
          if (password.type === 'password') {
            password.type = 'text';
            eyeIcon.classList.replace('bx-hide', 'bx-show');
            return;
          }
          password.type = 'password';
          eyeIcon.classList.replace('bx-show', 'bx-hide');
        });
      });
    });

    return () => {
      pwShowHide.forEach(eyeIcon => {
        eyeIcon.removeEventListener('click', () => { });
      });
    };
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowSignup(!showSignup);
  };

  // dang ki 
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      try {
        await registerUser(username, email, password);
        setShowSignup(false)
        setPassword('');
      } catch (error) {
        console.error('Error in handleSignup:', error);
      }

    }
  };

  //dang nhap 
  const handleSingin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(emailOrUsername, password);
      navigation('/');
      const jwt = Cookies.get('jwt');
      console.log('JWT from cookie:', jwt);
    } catch (error) {
      console.error('Error in handleSignin:', error);

    }
  }


    return (
      <section className={`container forms ${showSignup ? 'show-signup' : ''}`}>
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleSingin}>
              <div className="field input-field">
                <input type="text" placeholder="Email/UserName" className="input" value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <i className='bx bx-hide eye-icon'></i>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">Forgot password?</a>
              </div>
              <div className="field button-field">
                <button type="button" onClick={handleSingin}>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>Don't have an account? <a href="#" className="link signup-link" onClick={handleToggle}>Signup</a></span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <i className='bx bxl-facebook facebook-icon'></i>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="Google logo" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
        {/* Signup Form */}
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form  >
              <div className="field input-field">
                <input type="text" placeholder="UserName" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Create password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Confirm password" className="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <i className='bx bx-hide eye-icon'></i>
              </div>
              <div className="field button-field">
                <button type="button" onClick={handleSignup}>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>Already have an account? <a href="#" className="link login-link" onClick={handleToggle}>Login</a></span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <i className='bx bxl-facebook facebook-icon'></i>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="Google logo" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    );
  };

export default LoginSignup 