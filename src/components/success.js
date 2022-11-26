import React from 'react'
import SuccessStyles from './success.module.css'
import johnson from '../TempImages/DocJohnson.jpg'

const SuccessPage = () => {
  return (
    <div className={SuccessStyles.successBox}>
      <p>Congrats you have logged in, enjoy this picture of William Gregory Johnson</p>
      <img src={johnson}/>
    </div>
  )
};

export default SuccessPage;
