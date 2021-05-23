import React from 'react';
import { Route, Routes } from 'react-router';
import styles from './Login.module.css';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="/perdeu" element={<LoginPasswordLost />}></Route>
        <Route path="/resetar" element={<LoginPasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
