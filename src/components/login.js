import React from 'react'
import LoginStyles from './login.module.css'
import Images from './images'
const images = Images.slice(0,24);
const images1 = Images[1];
var xa =0;
const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const as = images.map((images, index) => <button key={number}><img src={images}/></button>);
const LoginPage = (props) => {
  function click (event){
    var imageclicked=event.target;
    var imagesrc=imageclicked;
    var footpath=images[0];
    var xdf=imagesrc.currentSrc;
    var imagefoot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAm1QTFRF/////1UA1VUA34AA/7+A43EA6oAA6pVVz3AA33AAxmMA5HkA0WgA5XIA6HQAzGYA0mwA5nYA53cA5HUA0WsA02oA5HYA88CJ020A5HQA0msA1WwA02wA5XUA4qNh9MCM0GkA5XQA5HUA0GoA5HQA5nYA5Klp5XUAz2oA5HUAz2gA5XQA5ncC9cmc5XUAz2kA5XUA5XUA9Mug5XYAzWkA5XUAzWgA5XUAzGcA5XUA6Yom5bJ85nUAzWgA5XUAy2gA57eFzGYA5XUAymcA99a1+Naz5XQAymYAymcA5HUAyWYA6IUfymYA5XUA9MeW5XUAyGYAyWYA5XUA5XUAznUayGYA5XUA7cehyGUAx2UA68eh+t/F5XUA5XUAxWQA5beJ99WyxWMAxGQAy3Uc5XUAw2MA5XUA8Ne8w2MAwmIA5XUA6smnwGEAwWEAwWIAwWMEwWUGwmcKw2gLw2gMxnAYxnAZx3IcyXkmynknynopzH4vzIAyzYE0zmkAzoM30Ig/0IlB0YtD0YtE03ga03kc1ZVU1ZdX15pc2Icz2qNs3Khz3al04bWH5XUA5XYB5ngF5nsL5nsM6IMZ6IMa6IQb6IQc6Ich6Yso6o8w65M365Q67Z9N7aBQ7qVY7qZb76lg76tk79e+79e/79jA8K1n8K9r8NrD8rh88ruA8r2F89rA89zD9MSS9ebX9efY9tGp9ufZ9unb9unc+d3B+d7C+d/D+ezf+fHp+vHp+vPr++rZ++va++zb++zc+/Pr+/Ts/PTt/PXu/Pbx/Pfx/Pjz/fLn/fbu/fbv/fbx/fn0/fn1/vn1//79//7+////Actz7wAAAGx0Uk5TAAMGCAgJDAwQEBITFh0hIygpKzA3OkFBS0tPVVdXWVlcY2lxcnl6foCFkJOWmJ+jpKamp6iwsbO5uby9v8DExczR1NXV2Nvc3d3g4OHi4uPn6Ojq6+zt7e/x8fH19/j4+Pn7+/v8/Pz9/v7+vFAGPAAAAdVJREFUOE9l0uVXFlEUxeFtYovd3d0dqNit2C3Wqx4sxB6xwNzKazcmNhaY2IGKnr/JD3fizrC//p5z15q1BoiuQbfRCydNmTlnVK92jSqWqjW6LlNVLTpLkuS0JuFcu+dKxgst4Swva+Xq/daRdMX7MyQdkYZBr59ing2EIyKd/d52NRkS7w6KiCS5uVwfWjPiWYaIzHBBd4YWiPmmt2Jk8UeqqvkZMg8AUGexHS+SdNLzVFXzt84GgMoTQtcf7l0/ImLEk1kA0CXUeb749w7xxAIAVRdZ9dod3v3y+ph4YgSADvb5hR9PP+7a/mKTJ9oDFVL8evI0ef/vCfGWnvcnAWgdnJ/6mXvjU9ab7EAsBTA1HohLJd93y85MH0hfoHxJoSuuXmHur2+HxVqsCtBCtcCIy8WPP+/Z+9YGwwD0VtWCHJLkg3/HRTZafUMigDGqqi9zSPLV0a/77XtJBoDBRZ5wRPYdsHtqTQAYdM4VjkSW1hIAMJRGPNwSBT3MrzCcrrgdEeNMxwB64tZmu0+u5IJOJHnoeVT0h7dmJB3ZFhaxNn5HLdIRccVNI6bXDTrKjDXf54u08Y0RWtNUscT6kfUQXbWOAycuWRtbtWLN3CHNS9X/Aqee+TxNySIAAAAASUVORK5CYII=";

    if(images[0]==xdf){
     alert('hello');
    }
      else if(images[1]==xdf){
      alert('sfd');
     }
     else if(images[2]==xdf){
      alert('sfd');
     }
     else if(images[3]==xdf){
      alert('sfd');
     }
     else if(images[4]==xdf){
      alert('sfd');
     }
     else if(images[5]==xdf){
      alert('sfd');
     }
     else if(images[6]==xdf){
      alert('sfd');
     }
     else if(images[7]==xdf){
      alert('sfd');
     }
     else if(images[8]==xdf){
      alert('sfd');
     }
     else if(images[9]==xdf){
      alert('sfd');
     }
     else if(images[10]==xdf){
      alert('sfd');
     }
     else if(images[11]==xdf){
      alert('sfd');
     }
     else if(images[12]==xdf){
      alert('sfd');
     }
     else if(images[13]==xdf){
      alert('sfd');
     }
     else if(images[14]==xdf){
      alert('sfd');
     }
     else if(images[15]==xdf){
      alert('sfd');
     }
     else if(images[16]==xdf){
      alert('sfd');
     }
     else if(images[17]==xdf){
      alert('sfd');
     }
     else if(images[18]==xdf){
      alert('sfd');
     }
     else if(images[19]==xdf){
      alert('sfd');
     }
     else if(images[20]==xdf){
      alert('sfd');
     }
     else if(images[21]==xdf){
      alert('sfd');
     }
     else if(images[22]==xdf){
      alert('sfd');
     }
     else if(images[23]==xdf){
      alert('sfd');
     }
     
     //console.log(as.entries);
     xa++;
     console.log(footpath);
     console.log(imagesrc.currentSrc);
     console.dir(event.target);
   }
  return (
    <div className={LoginStyles.loginBox}> 
      <div className={LoginStyles.heading}>
        <button className={LoginStyles.backButton} onClick={() => props.setPage('Landing')}>Back</button>
        <p className={LoginStyles.impassName}>ImPass</p>
      </div>
      <div className={LoginStyles.usernameInfo}>
        <div>
          <p>Username</p>
          <input type="text" className={LoginStyles.usernameField} defaultValue={props.username}/>
          </div>
          <button className={LoginStyles.loginButton} value="Log in">Login</button> 
        </div>
        <p>Select your ImPass images in order to log in</p>
      <div className={LoginStyles.images}>
      {images.map((images) => <button onClick={click}><img src={images}/></button>)}
     
      
    </div>
    </div>
  )
};

export default LoginPage;