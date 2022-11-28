import React from 'react'
import LoginStyles from './login.module.css'
import Images from './images'
const images = Images.slice(0,24);
const images1 = Images[1];
var xa =0;
var password=[0,0,0,0];
const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const as = images.map((images, index) => <button key={number}><img src={images}/></button>);
shuffleArray(images);
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
const LoginPage = (props) => {
  function click (event){
    var imageclicked=event.target;
    var imagesrc=imageclicked;
    var footpath=images[0];
    var xdf=imagesrc.currentSrc;
    var imagefoot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAm1QTFRF/////1UA1VUA34AA/7+A43EA6oAA6pVVz3AA33AAxmMA5HkA0WgA5XIA6HQAzGYA0mwA5nYA53cA5HUA0WsA02oA5HYA88CJ020A5HQA0msA1WwA02wA5XUA4qNh9MCM0GkA5XQA5HUA0GoA5HQA5nYA5Klp5XUAz2oA5HUAz2gA5XQA5ncC9cmc5XUAz2kA5XUA5XUA9Mug5XYAzWkA5XUAzWgA5XUAzGcA5XUA6Yom5bJ85nUAzWgA5XUAy2gA57eFzGYA5XUAymcA99a1+Naz5XQAymYAymcA5HUAyWYA6IUfymYA5XUA9MeW5XUAyGYAyWYA5XUA5XUAznUayGYA5XUA7cehyGUAx2UA68eh+t/F5XUA5XUAxWQA5beJ99WyxWMAxGQAy3Uc5XUAw2MA5XUA8Ne8w2MAwmIA5XUA6smnwGEAwWEAwWIAwWMEwWUGwmcKw2gLw2gMxnAYxnAZx3IcyXkmynknynopzH4vzIAyzYE0zmkAzoM30Ig/0IlB0YtD0YtE03ga03kc1ZVU1ZdX15pc2Icz2qNs3Khz3al04bWH5XUA5XYB5ngF5nsL5nsM6IMZ6IMa6IQb6IQc6Ich6Yso6o8w65M365Q67Z9N7aBQ7qVY7qZb76lg76tk79e+79e/79jA8K1n8K9r8NrD8rh88ruA8r2F89rA89zD9MSS9ebX9efY9tGp9ufZ9unb9unc+d3B+d7C+d/D+ezf+fHp+vHp+vPr++rZ++va++zb++zc+/Pr+/Ts/PTt/PXu/Pbx/Pfx/Pjz/fLn/fbu/fbv/fbx/fn0/fn1/vn1//79//7+////Actz7wAAAGx0Uk5TAAMGCAgJDAwQEBITFh0hIygpKzA3OkFBS0tPVVdXWVlcY2lxcnl6foCFkJOWmJ+jpKamp6iwsbO5uby9v8DExczR1NXV2Nvc3d3g4OHi4uPn6Ojq6+zt7e/x8fH19/j4+Pn7+/v8/Pz9/v7+vFAGPAAAAdVJREFUOE9l0uVXFlEUxeFtYovd3d0dqNit2C3Wqx4sxB6xwNzKazcmNhaY2IGKnr/JD3fizrC//p5z15q1BoiuQbfRCydNmTlnVK92jSqWqjW6LlNVLTpLkuS0JuFcu+dKxgst4Swva+Xq/daRdMX7MyQdkYZBr59ing2EIyKd/d52NRkS7w6KiCS5uVwfWjPiWYaIzHBBd4YWiPmmt2Jk8UeqqvkZMg8AUGexHS+SdNLzVFXzt84GgMoTQtcf7l0/ImLEk1kA0CXUeb749w7xxAIAVRdZ9dod3v3y+ph4YgSADvb5hR9PP+7a/mKTJ9oDFVL8evI0ef/vCfGWnvcnAWgdnJ/6mXvjU9ab7EAsBTA1HohLJd93y85MH0hfoHxJoSuuXmHur2+HxVqsCtBCtcCIy8WPP+/Z+9YGwwD0VtWCHJLkg3/HRTZafUMigDGqqi9zSPLV0a/77XtJBoDBRZ5wRPYdsHtqTQAYdM4VjkSW1hIAMJRGPNwSBT3MrzCcrrgdEeNMxwB64tZmu0+u5IJOJHnoeVT0h7dmJB3ZFhaxNn5HLdIRccVNI6bXDTrKjDXf54u08Y0RWtNUscT6kfUQXbWOAycuWRtbtWLN3CHNS9X/Aqee+TxNySIAAAAASUVORK5CYII=";
  if(xa<4){
    if(Images[0]==xdf){
     password[xa]='1'
    }
      else if(Images[1]==xdf){
      password[xa]='2'
     }
     else if(Images[2]==xdf){
      password[xa]='3'
     }
     else if(Images[3]==xdf){
      password[xa]='4'
     }
     else if(Images[4]==xdf){
      password[xa]='5'
     }
     else if(Images[5]==xdf){
      password[xa]='6'
     }
     else if(Images[6]==xdf){
      password[xa]='7'
     }
     else if(Images[7]==xdf){
      password[xa]='8'
     }
     else if(Images[8]==xdf){
      password[xa]='9'
     }
     else if(Images[9]==xdf){
      password[xa]='10'
     }
     else if(Images[10]==xdf){
      password[xa]='11'
     }
     else if(Images[11]==xdf){
      password[xa]='12'
     }
     else if(Images[12]==xdf){
      password[xa]='13'
     }
     else if(Images[13]==xdf){
      password[xa]='14'
     }
     else if(Images[14]==xdf){
      password[xa]='15'
     }
     else if(Images[15]==xdf){
      password[xa]='16'
     }
     else if(Images[16]==xdf){
      password[xa]='17'
     }
     else if(Images[17]==xdf){

      password[xa]='18'
     }
     else if(Images[18]==xdf){
      
      password[xa]='19'
     }
     else if(Images[19]==xdf){
      
      password[xa]='20'
     }
     else if(Images[20]==xdf){
      
      password[xa]='21'
     }
     else if(Images[21]==xdf){
      
      password[xa]='22'
     }
     else if(Images[22]==xdf){
      
      password[xa]='23'
     }
     else if(Images[23]==xdf){
      
      password[xa]='24'
     }
     xa++;
    }
    else{
      alert("error, please try again");
      xa=0;
    }
     
     //console.log(as.entries);
     //nxa++;
     console.log(footpath);
     console.log(imagesrc.currentSrc);
     console.dir(password);
  }

  var usernames = ['Tester1', "User6", "NewUser1234", "username"];
  var passwords = [
    ['22','16','4','0'],
    ['9','16','12','20'],
    ['15','7','11','18'],
    ['1','2','3','4']     
  ];

  const [currentUsername, setCurrentUsername] = React.useState("");

  const updateUsername = event => {
    setCurrentUsername(event.target.value);
  };

  function validateLogin(username, password) {
    console.log(password);
    console.log(username);
    if(usernames.includes(username)) {
      console.log(passwords[usernames.indexOf(username)])
      if ( isCorrectPassword(passwords[usernames.indexOf(username)], password)) {
        props.setPage("Success");
      } else {
        console.log("shit");
      }
    } else {
      console.log("fuck");
    }
  };

  function isCorrectPassword(pass1, pass2) {
    for (var i = 0; i < pass1.length; i++) {
      if (pass1[i] !== pass2[i]) {
        return false;
      }
    };
    return true;
  };
  

  return (
    <div className={LoginStyles.loginBox}> 
      <div className={LoginStyles.heading}>
        <button className={LoginStyles.backButton} onClick={() => props.setPage('Landing')}>Back</button>
        <p className={LoginStyles.impassName}>ImPass</p>
      </div>
      <div className={LoginStyles.usernameInfo}>
        <div>
          <p>Username</p>
          <input type="text" className={LoginStyles.usernameField} onChange={updateUsername} defaultValue={props.username}/>
          </div>
          <button className={LoginStyles.loginButton} onClick={() => validateLogin(currentUsername, password)}value="Log in">Login</button> 
        </div>
        <p>Select your ImPass images in order to log in</p>
      <div className={LoginStyles.images}>
      {images.map((images) => <button onClick={click}><img src={images}/></button>)}
     
      
    </div>
    </div>
  )
};

export default LoginPage;