import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export const LoginContainer = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoggedInChange = () => {
    if (name.length > 0 && password.length > 0) {
      setLoggedIn(true);
    }
    if (loggedIn) {
      return (
        <>
          <DictionaryContainer />
        </>
      );
    }
  };
  console.log(loggedIn);
  return (
    <div>
      <h2>sing in</h2>
      <input type="text" onChange={e => setName(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLoggedInChange}>Login</button>
    </div>
  );
};
const DictionaryContainer = () => {
  return (
    <div>
      <p>You are signed in, welcome!</p>
    </div>
  );
};
