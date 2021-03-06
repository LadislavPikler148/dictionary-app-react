import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DictionaryContainer } from "./components/DictionaryContainer";
import { LoginContainer } from "./components/LoginContainer";

export const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    return <DictionaryContainer />;
  }
  return (
    <LoginContainer
      onClickProp={loggedIn => setIsLoggedIn(loggedIn)}
      isLoggedIn={isLoggedIn}
    />
  );
};
