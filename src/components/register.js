import React, { useEffect, useState } from "react";
import RegisterStyles from './register.module.css'
import images from './images'

const RegisterPage = (props) => {

  return (
    <div className={RegisterStyles.registerBox}>
      <div className={RegisterStyles.heading}>
        <button className={RegisterStyles.backButton} onClick={() => props.setPage('Landing')}>Back</button>
        <p className={RegisterStyles.impassName}>ImPass</p>
      </div>
      <div className={RegisterStyles.usernameInfo}>
        <div>
          <p>Username</p>
          <input type="text" className={RegisterStyles.usernameField} defaultValue={props.username}/>
        </div>
        <button className={RegisterStyles.createPassButton}>Create ImPass</button>
      </div>
      <p>Select 4 images in your preferred order to create your impass</p>
      <div className={RegisterStyles.images}>
        {images.map((image) => <button onClick={() => console.log("clickin that shit")}><img src={image}/></button> )}
      </div>
    </div>
  )
};

export default RegisterPage;