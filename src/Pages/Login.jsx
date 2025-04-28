import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Login.css';

const AuthForms = () => {
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
    setMessage({ text: "", type: "" });
    setFormData({
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage({
      text: "Login successful! Welcome back.",
      type: "success",
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({
        text: "Passwords do not match!",
        type: "error",
      });
      return;
    }
    setMessage({
      text: "Registration successful! Welcome to our platform.",
      type: "success",
    });
    setTimeout(() => {
      setIsLoginForm(true);
    }, 1500);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setMessage({
        text: "Please enter your email address",
        type: "error",
      });
      return;
    }
    setMessage({
      text: "Password reset link has been sent to your email",
      type: "success",
    });
    setTimeout(() => {
      setIsForgotPassword(false);
      setIsLoginForm(true);
    }, 2000);
  };

  const switchToForgotPassword = () => {
    setIsForgotPassword(true);
    setIsLoginForm(true);
    setMessage({ text: "", type: "" });
    setFormData({
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-container">
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <div
        className={`forms-container ${
          isLoginForm ? "login-active" : "register-active"
        }`}
      >
        {/* Login Form */}
        {!isForgotPassword ? (
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
              <div className="forgot-password">
                <span onClick={switchToForgotPassword}>Forgot Password?</span>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <span className="switch-btn" onClick={switchForm}>
                Register
              </span>
            </p>
          </div>
        ) : (
          <div className="forgot-password-form">
            <h2>Password Reset</h2>
            <form onSubmit={handleForgotPassword}>
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
              <button type="submit" className="submit-btn">
                Send Reset Link
              </button>
            </form>
            <p>
              <span
                className="switch-btn"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Login
              </span>
            </p>
          </div>
        )}

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
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
          <p>
            Already have an account?{" "}
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