import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState(""); // Added for signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    const url = login ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/signup";
    const payload = login ? { email, password } : { name, email, password }; // Include name for signup

    try {
      const { data } = await axios.post(url, payload);
      localStorage.setItem("token", data.token); // Store token
      localStorage.setItem("userId", data.userId); // Store userId
      navigate("/packages"); // Redirect after login/signup
    } catch (error) {
      console.error("Authentication error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{login ? "Login" : "Sign Up"}</h2>

        {!login && (
          <input
            type="text"
            placeholder="Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleAuth}>
          {login ? "Login" : "Sign Up"}
        </button>

        <p className="auth-toggle" onClick={() => setLogin(!login)}>
          {login ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
