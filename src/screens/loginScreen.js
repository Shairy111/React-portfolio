import React, { useState } from "react";
import axios from "axios";

import { Button } from "semantic-ui-react";

axios.defaults.withCredentials = true;
function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      props.history.push("/");
      window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            required
            class="form-control"
            id="email"
            type="text"
            placeholder="enter Email"
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            required
            class="form-control"
            id="password"
            type="password"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
        </div>
        <div>
          <label></label>
          <Button primary>Login</Button>
        </div>
      </form>
      )

    </div>
  );
}

export default LoginScreen;
