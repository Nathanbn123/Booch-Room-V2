import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';



function Home(props) {



  return (
    <div>
      
      <div className='container'>
        <h3>{props.name}</h3>
        <h4><em>{props.brand}</em></h4>
        <p><em>{props.flavor}</em></p>
        <p>${props.price}</p>
        <hr/>
      </div>

      <style jsx>{`
          div {
            text-align: center;
            padding: 2em;
          }

          hr {
            width: 10%;
            margin-top: 3em;

          }




        `}</style>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string


};



export default Home;
