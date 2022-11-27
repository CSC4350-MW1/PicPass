import React, { useEffect, useState } from "react";
import LandingStyles from './landing.module.css'

const LandingPage = (props) => {
  
  function updateUser(event) {
    //Validate the username here before setting
    props.setUsername(event.target.value);
  }

  return (
    <div className={LandingStyles.loginBox}>
      <p className={LandingStyles.impassName}>ImPass</p>
      <div className={LandingStyles.usernameInfo}>
        <p>Username</p>
        <input type="text" onChange={updateUser} className={LandingStyles.usernameField} />
      </div>
      <div className= {LandingStyles.loginRegisterButtons}>
        <button type="button" onClick={() => props.setPage("Login")} className={LandingStyles.loginButton} value="Log in">Login</button>
        <button type="button" onClick={() => props.setPage("Register")} className={LandingStyles.registerButton} value="Register">Register</button>
      </div>
    </div>
  )
};
export default LandingPage;