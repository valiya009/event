import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Fetures/USerSlice";
import "../Pages/Login.css";

const AuthForms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
    setIsForgotPassword(false);
    setMessage({ text: "", type: "" });
    setFormData({
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
      gender: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/user/login", {
        email: formData.email,
        password: formData.password,
      });

      const userData = res.data.user;
      dispatch(login(userData));
      setMessage({ text: "Login successful!", type: "success" });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Login failed!",
        type: "error",
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
        }
      );

      setMessage({
        text: res.data.message || "Registered successfully!",
        type: "success",
      });
      setTimeout(() => setIsLoginForm(true), 1500);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Registration failed!",
        type: "error",
      });
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setMessage({ text: "Please enter your email address", type: "error" });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/forgote",
        {
          email: formData.email,
        }
      );

      setMessage({
        text: res.data.message || "Password reset link sent to your email.",
        type: "success",
      });

      setTimeout(() => {
        setIsForgotPassword(false);
        setIsLoginForm(true);
      }, 2000);
    } catch (error) {
      setMessage({
        text:
          error.response?.data?.message ||
          "Failed to send reset link. Please try again.",
        type: "error",
      });
    }
  };
  const switchToForgotPassword = () => {
    setIsForgotPassword(true);
    setMessage({ text: "", type: "" });
    setFormData({
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
      gender: "",
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
            <h2>Reset Password</h2>
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
                className="test2"
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
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" className="test">
                  Select Gender
                </option>
                <option value="male" className="test">
                  Male
                </option>
                <option value="female" className="test">
                  Female
                </option>
                <option value="other" className="test">
                  Other
                </option>
              </select>
              <label className="test1">Gender</label>
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
