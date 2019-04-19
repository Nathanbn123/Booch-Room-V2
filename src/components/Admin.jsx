import React from 'react';
import { Link } from 'react-router-dom';



function Admin() {

return(
  <div>
  <h2>Add a keg!</h2>
  <input>Kombucha Name</input>
  <input>Kombucha Brand</input>
  <input>Kombucha Flavor</input>
  <input>Kombucha Price</input>
  <button>Submit!</button>

  <h2>Edit a keg!</h2>
  <input></input>
  <input></input>
  <input></input>
  <input></input>
  <button>Submit!</button>
  <style jsx> {`
    div {
      text-align: center;

    }




  `}</style>
</div>
)}

export default Admin
