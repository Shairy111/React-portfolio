import React, { useContext} from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import AuthContext from "../context/AuthContext";

function LogoutButton() {

  const {getLoggedInStatus} = useContext(AuthContext)
  const logout = async (e) => {
    await axios.get("/api/auth/logout");
    getLoggedInStatus();
  };

  return <>
  <Button onClick={logout}>
      logout
  </Button>
  </>;
}

export default LogoutButton;
