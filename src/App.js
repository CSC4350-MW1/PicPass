import React, { useEffect, useState } from "react";
import './App.css';
import Landing from "./components/landing"
import Register from "./components/register"
import Login from "./components/login"
import Success from "./components/success"


function App() {
  const [page, setPage] = useState('Landing');
  const [username, setUsername] = useState(""); 

  console.log(username)
  console.log(page)

  return (
    <div className="App">
      <header className="App-header">
        {page === 'Landing' ? 
          <Landing setPage={setPage} username={username} setUsername={setUsername}/> 
          : 
          page === 'Register' ?
            <Register username={username}/> 
            :
            page === 'Login' ? 
              <Login username={username}/>
              :
              <Success/>
        }
      </header>
    </div>
  );
}

export default App;
