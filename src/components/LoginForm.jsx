import React from "react";
import "./LoginForm.css";
import { database } from "./Config"; // Make sure to import 'auth' for Firebase authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Call signInWithEmailAndPassword inside handleSubmit
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Redirect to "/login" after successful login
        navigate("/submit");
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login failed:", error.message);
      });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="form_main">
        <p className="heading">Login</p>

        <div className="inputContainer">
          <svg
            className="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            {/* Your SVG path here */}
          </svg>
          <input
            type="email"
            className="inputField"
            id="username"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="inputContainer">
          <svg
            className="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            {/* Your SVG path here */}
          </svg>
          <input
            type="password"
            className="inputField"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <button id="button" type="submit">
          Submit
        </button>
        <a className="forgotLink" href="#">
          Forgot your password?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
