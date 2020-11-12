import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";

import { TextInput } from "../../components";
import { useAuth } from "../../context/auth";
import * as api from "../../utils/api"

import * as styles from "./Login.module.scss";

const Login = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || "/"

  if(isLoggedIn) {
      return <Redirect to={referer}/>
  }

  const handleLogin = e => {
      e.preventDefault();
      setIsLoading(true)
      postLogin(password)
  }

  const postLogin = async (password) => {
      const checkAuth = await api.checkLogin(password)
      if(checkAuth.auth) {
          setAuthTokens(checkAuth.token)
          setIsLoading(false)
          setLoggedIn(true)
      } else {
          setIsError(true)
          setIsLoading(false)
      }
  }

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <p>Please enter the code you received on the invite</p>
      <form className={styles.form} onSubmit={handleLogin}>
        <TextInput
          handleTextChange={setPassword}
          label="Wedding Code"
          value={password}
          error={isError}
          helperText="The code provided was incorrect. Please try again."
        />
        <Button
          type="submit"
          variant="outlined"
          className={styles.submitButton}
        >
          {isLoading ? <CircularProgress size={28}/> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
