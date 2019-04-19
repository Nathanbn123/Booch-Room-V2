import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
  return (
    <div>

      <a><Link to="/" style={{ textDecoration: 'none', cursor: 'crosshair' }}><h2>Farmers Market</h2></Link></a>
      <style jsx>{`
        h2 {
          text-align: center;
          font-size: 1.5em;
          padding: 10px;
          color: #9fa845;
          border: 2px solid #5f3917;
          border-radius: 50px;
          text-shadow: 1px 1px #5f3917;
        }

        `}</style>
    </div>
  );
}

export default Header;
