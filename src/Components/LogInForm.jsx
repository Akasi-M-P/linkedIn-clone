import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the form data to the server and authenticate the user
  };

  const handleForgotPassword = () => {
    // Here you can implement the logic to handle the forgot password functionality
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleForgotPassword}>
        Forgot password
      </button>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;
