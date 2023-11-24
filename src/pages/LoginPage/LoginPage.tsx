import { User } from "../../models/user";
import "./LoginPage.scss";

import React, { useState } from "react";

type LoginPageProps = {
  logInHandler: (user: User) => void;
};

export const LoginPage = (props: LoginPageProps) => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const handleLoginClick = () => {
    // let's say this object received from backend side
    const user: User = {
      id: 123,
      login: "admin",
      name: "Antoshka",
    };

    props.logInHandler(user);
  };

  const handleRegisterClick = () => {
    // registering the user and ...
    alert("Registered! Please log in now.");
    setMode("login");
  };

  return (
    <div className="login-page">
      <div className="container">
        {mode === "login" ? (
          <div className="login-part">
            <form>
              <label>
                Login: <input type="text" />
              </label>
              <label>
                Password: <input type="password" />
              </label>
              <button type="button" onClick={handleLoginClick}>
                Let me in!
              </button>
            </form>
            <div className="link-container">
              Don't have an account?
              <button
                className="link-button"
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>
          </div>
        ) : (
          <div className="register-part">
            <form>
              <label>
                Login: <input type="text" />
              </label>
              <label>
                Name: <input type="text" />
              </label>
              <label>
                Password: <input type="password" />
              </label>
              <label>
                Repeat Password: <input type="password" />
              </label>
              <button type="button" onClick={handleRegisterClick}>
                Register
              </button>
            </form>
            <div className="link-container">
              Have an account?
              <button className="link-button" onClick={() => setMode("login")}>
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
