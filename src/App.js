import React, { useEffect, useState } from "react";
import './App.css';
import Landing from "./components/landing"
import Register from "./components/register"
import Login from "./components/login"
import Success from "./components/success"


function App() {
  const [page, setPage] = useState('Landing');
  console.log(page)

  return (
    <div className="App">
      <header className="App-header">
        {page === 'Landing' ? 
          <Landing setPage={setPage}/> 
          : 
          page === 'Register' ?
            <Register setPage={setPage}/> 
            :
            page === 'Login' ? 
              <Login setPage={setPage}/>
              :
              page === 'Success' ?
              <Success/> : <p>you should never see this</p>
        }
      </header>
    </div>
  );
}

export default App;
