import React from 'react';
import Booch from './Booch';
import PropTypes from 'prop-types';



// const Drinks = [
//   {
//     name: 'Radiate',
//     brand: 'Soma',
//     price: 5.50 ,
//     flavor: 'Cherry Chai',
//   },
//   {
//     name: 'Uplift',
//     brand: 'Brew DR',
//     price: 6.50 ,
//     flavor: 'Peppermint Green Tea',
//   },
//   {
//     name: 'Coconut lime',
//     brand: 'humm',
//     price: 5.50 ,
//     flavor: 'Coconut lime',
//   },
//   {
//     name: 'Ginger Juniper',
//     brand: 'humm',
//     price: 6.50 ,
//     flavor: 'Ginger Juniper',
//   },
//
// ];


function BoochList(props) {

  return (
    <div>
      {props.boochList.map((drink, index) =>
        <Booch  name={drink.name}
          brand={drink.brand}
          price={drink.price}
          flavor={drink.flavor}
          key={index}
        />
      )}
    </div>
  );
}


Booch.propTypes = {
    boochList: PropTypes.array
  };



export default BoochList;
