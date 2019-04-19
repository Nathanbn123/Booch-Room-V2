import React from 'react';
import { Link } from 'react-router-dom';
function Header(){





  return (
    <div>
      <h1>Welcome to the <em>Booch Room</em></h1>
      <h2>What's on tap?</h2>
       <a><Link to="/Admin" style={{ textDecoration: 'none', cursor: 'crosshair' }}><button>Admin?</button></Link></a>

      <style jsx>{`
        div {
          text-align: center;
          padding: 1em;

        }





        `}</style>
    </div>
  );
}

export default Header;
