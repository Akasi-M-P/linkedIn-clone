import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the form data to the server and authenticate the user
  };

  const handleForgotPassword = () => {
    // Here you can implement the logic to handle the forgot password functionality
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email or phone</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <div style={{ display: "flex" }}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <label>
          <input
            className="showing-password"
            type="checkbox"
            onClick={toggleShowPassword}
            style={{ marginRight: "5px" }}
          />
          Show
        </label>
      </div>

      <button className="forgot" type="button" onClick={handleForgotPassword}>
        Forgot password
      </button>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;
