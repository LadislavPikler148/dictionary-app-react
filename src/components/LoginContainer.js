import React, { useState } from "react";

export const LoginContainer = ({ onClickProp }) => {
  const [name, setName] = useState("Mark");
  const [password, setPassword] = useState("123");

  return (
    <div className="login-container">
      <div className="center-Container">
        <h2>Welcome to you dictionary app</h2>
        <h3>sing in</h3>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            if (name === "Mark" && password === "123") {
              onClickProp(true);
            } else {
              onClickProp(false);
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
