import React from 'react';

import "./index.css";

const Login = () => {
  return (
    <form className="login" action="">
      <h1>Login</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button>Login</button>
    </form>
  )
}

export default Login;