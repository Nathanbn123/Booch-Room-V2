import React from 'react';
import { Link } from 'react-router-dom';



function Admin() {

  return(
    <div>
      <a><Link to='/' style={{ textDecoration: 'none', cursor: 'crosshair' }}><button>Home</button></Link></a>
      <h2>Add a keg!</h2>
      <input placeholder='Kombucha Name'></input>
      <input placeholder='Kombucha Brand'></input>
      <input placeholder='Kombucha Flavor'></input>
      <input placeholder='Kombucha Price'></input>
      <br/>
      <button>Submit!</button>

      <h2>Edit a keg!</h2>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
        <br/>
      <button>Submit!</button>
      <style jsx> {`
    div {
      text-align: center;

    }




  `}</style>
    </div>
  );}

export default Admin;
