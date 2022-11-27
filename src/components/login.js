import React, { useEffect, useState } from "react";
import LoginStyles from './login.module.css'
import Images from './images'

const images = Images.slice(0,12);

const LoginPage = (props) => {

  return (
    <div className={LoginStyles.loginBox}>
      <p className={LoginStyles.impassName}>ImPass</p>
      <div className={LoginStyles.usernameInfo}>
        <div>
          <p>Username</p>
          <input type="text" className={LoginStyles.usernameField} defaultValue={props.username}/>
          </div>
          <button className={LoginStyles.loginButton} value="Log in">Login</button> 
        </div>
        <p>Select your ImPass images in order to log in</p>
      <div className={LoginStyles.images}>
        {images.map((image) => <button onClick={() => console.log("clickin that shit")}><img src={image}/></button> )}
      </div>
    </div>
  )
};

export default LoginPage;
