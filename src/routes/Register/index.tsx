import React, { FormEvent, useState } from 'react';

import "./index.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {"Content-Type": "application/json"},
    })
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  )
}

export default Register