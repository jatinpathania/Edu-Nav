import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./login.module.css"; 

const Login = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={styles['login-page']}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`
      }}
    >
      <div className={styles['login-page-overlay']}></div>

      <nav className={styles.nav}>
        <div className={styles['nav-buttons']}>
          <button
            className={`${styles.btn} ${isLogin ? styles.active : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${styles.btn} ${!isLogin ? styles.active : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
      </nav>

      {/* The class on this container now triggers the 3D animation */}
      <div className={`${styles['form-container-wrapper']} ${isLogin ? styles['login-active'] : styles['register-active']}`}>
        {/* Login Form Container */}
        <div className={styles['login-container']}>
          <div className={styles['form-header']}>
            <span>Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </span>
            <h1>Login</h1>
          </div>
          <div className={styles['input-group']}>
            <div className="relative">
              <input type="text" placeholder="Username" className={styles['input-field']} />
              <span className={styles['input-icon']}>👤</span>
            </div>
          </div>
          <div className={styles['input-group']}>
            <div className="relative">
              <input type="password" placeholder="Password" className={styles['input-field']} />
              <span className={styles['input-icon']}>🔒</span>
            </div>
          </div>
          
          <div>
            <button className={styles['submit-btn']}>Login</button>
          </div>
          <div className={styles['form-footer']}>
            <label>
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <button className="text-blue-200 hover:underline">Forgot password?</button>
          </div>
        </div>

        {/* Register Form Container */}
        <div className={styles['register-container']}>
          <div className={styles['form-header']}>
            <span>Already have an account?{" "}
              <button onClick={() => setIsLogin(true)}>Login</button>
            </span>
            <h1>Register</h1>
          </div>

          <div className={styles['input-group']}>
            <div className="flex space-x-4">
              <div className="relative">
                <input type="text" placeholder="First Name" className={styles['input-field']} />
                <span className={styles['input-icon']}>👤</span>
              </div>
              <div className="relative">
                <input type="text" placeholder="Last Name" className={styles['input-field']} />
                <span className={styles['input-icon']}>👤</span>
              </div>
            </div>
          </div>
          <div className={styles['input-group']}>
            <div className="relative">
              <input type="email" placeholder="Email" className={styles['input-field']} />
              <span className={styles['input-icon']}>📧</span>
            </div>
          </div>
          <div className={styles['input-group']}>
            <div className="relative">
              <input type="password" placeholder="Password" className={styles['input-field']} />
              <span className={styles['input-icon']}>🔒</span>
            </div>
          </div>

          <div>
            <button className={styles['submit-btn']}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;