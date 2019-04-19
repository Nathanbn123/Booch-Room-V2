import React from 'react';
import Header from './Header';
import Home from './Home';
import Booch from './Booch';
// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Home/>
      <Booch/>

      <style jsx global>{`
        body {
          font-family: sans-serif;
          box-style: border-box;
          background-color: #e7e8d9;
        }
        `}</style>
    </div>
  );
}

export default App;
