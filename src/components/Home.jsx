import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';



function Home(props) {



  return (

    <div>
      <h3>{props.name}</h3>
      <h4><em>{props.brand}</em></h4>
      <p>{props.price}</p>
      <p><em>{props.flavor}</em></p>


      <style jsx>{`





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
