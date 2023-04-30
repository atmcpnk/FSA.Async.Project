import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { users } from "../../db/db";
import Footer from "./Footer";

const LoginForm = () => { // could pass in setLoggedIn as a prop here. move the state up to Main.js
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [loggedIn, setLoggedIn ] = useState(false);

    const username = users.find((user) => user.email === email)?.username;

    function authenticate(email,password){
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            setLoggedIn(true);
        }else{
            alert("Invalid email or password");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(email,password);
    };
    
    return (
        <>
            {loggedIn ? (
        <div>
          <h1 id="welcome-message">Welcome, {username}</h1>
        </div>
      ) : (
        <div id="login-ctr">
          <h1 id="title">Login</h1>
          <form id="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" id="login-btn">
              Login
            </button>
          </form>
        </div>
      )}
      <footer>
        <Footer id='footer' />
      </footer>
    </>
  );
};

export default LoginForm;