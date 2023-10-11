import React from 'react';

import "./index.css";

const Register = () => {
  return (
    <form className="register" action="">
      <h1>Register</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button>Login</button>
    </form>
  )
}

export default Register