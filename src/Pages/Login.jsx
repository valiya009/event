import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Login.css';

const AuthForms = () => {
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
    setMessage({ text: '', type: '' });
    setFormData({
      email: '',
      password: '',
      fullName: '',
      confirmPassword: ''
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    setMessage({
      text: 'Login successful! Welcome back.',
      type: 'success'
    });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({
        text: 'Passwords do not match!',
        type: 'error'
      });
      return;
    }
    // Add your registration logic here
    setMessage({
      text: 'Registration successful! Welcome to our platform.',
      type: 'success'
    });
    setTimeout(() => {
      setIsLoginForm(true);
    }, 1500);
  };

  return (
    <div className="auth-container">
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      <div className={`forms-container ${isLoginForm ? 'login-active' : 'register-active'}`}>
        {/* Login Form */}
        <div className="login-form">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <span className="switch-btn" onClick={switchForm}>
              Register
            </span>
          </p>
        </div>

        {/* Registration Form */}
        <div className="register-form">
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <label>Full Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <label>Confirm Password</label>
            </div>
            <button type="submit" className="submit-btn">Register</button>
          </form>
          <p>
            Already have an account?{' '}
            <span className="switch-btn" onClick={switchForm}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;