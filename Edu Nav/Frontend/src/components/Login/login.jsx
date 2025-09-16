import React, { useState } from "react";
import "./login.css"; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="wrapper">
      <nav className="nav">
      
        <div className="nav-button">
          <button className={`btn ${isLogin ? "white-btn" : ""}`} onClick={() => setIsLogin(true)}>Login</button>
          <button className={`btn ${!isLogin ? "white-btn" : ""}`} id="registerBtn" onClick={() => setIsLogin(false)}>Register</button>
        </div>
      </nav>

      <div className="form-box">
        <div className={`login-container ${!isLogin ? "active" : ""}`}>
          <div className="top">
            <span>Don’t have an account?{" "}<a href="#" onClick={() => setIsLogin(false)}>Sign Up</a></span>
            <header>Login</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <button className="submit">Login</button>
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check">Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </div>

        <div className={`register-container ${!isLogin ? "active" : ""}`}>
          <div className="top">
            <span>Already have an account?{" "}<a href="#" onClick={() => setIsLogin(true)}>Login</a></span>
            <header>Register</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="First Name" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Last Name" />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="email" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <button className="submit">Register</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
