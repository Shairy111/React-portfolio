import React, { useContext } from "react";
import { Route } from "react-router-dom";
import ProjectScreen from ".././screens/ProjectScreen";
import HomeScreen from ".././screens/HomeScreen";
import AboumeScreen from ".././screens/AboumeScreen";
import BlogScreen from ".././screens/BlogScreen";
import SocialScreen from ".././screens/SocialScreen";
import AdminScreen from ".././screens/AdminScreen";
import LoginScreen from ".././screens/loginScreen";
import AddProjectScreen from ".././screens/AddProjectScreen";
import ProjectDetailScreen from ".././screens/ProjectDetailScreen";
import CategoryScreen from ".././screens/CategoryScreen";
import CategoryDetailScreen from ".././screens/CategoryDetailScreen";
import EditScreen from ".././screens/EditScreen";
import AuthContext from "../context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext)
  console.log(loggedIn);
  return (
    <>
      <Route path="/project/:id/detail" component={ProjectDetailScreen}></Route>

      {loggedIn === true && (
        <>
          <Route path="/Admin" component={AdminScreen} exact></Route>
          <Route path="/Admin/Add" component={AddProjectScreen}></Route>
          <Route path="/Admin/:id/Edit" component={EditScreen}></Route>
        </>
      )}
      <Route path="/Login" component={LoginScreen} exact></Route>

      <Route path="/Social" component={SocialScreen}></Route>
      <Route path="/Blogs" component={BlogScreen}></Route>
      <Route path="/Aboume" component={AboumeScreen}></Route>
      <Route path="/Projects" component={ProjectScreen}></Route>
      <Route path="/Category" component={CategoryScreen} exact></Route>
      <Route path="/Category/:name" component={CategoryDetailScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </>
  );
}

export default Router;
