import React from 'react';
import Home from './Home';



const Drinks = [
  {
    name: 'Radiate',
    brand: 'Soma',
    price: 5.50 ,
    flavor: 'Cherry Chai',
  },
  {
    name: 'Uplift',
    brand: 'Brew DR',
    price: 6.50 ,
    flavor: 'Peppermint Green Tea',
  },
  {
    name: 'Coconut lime',
    brand: 'humm',
    price: 5.50 ,
    flavor: 'Coconut lime',
  },
  {
    name: 'Ginger Juniper',
    brand: 'humm',
    price: 6.50 ,
    flavor: 'Ginger Juniper',
  },

];


function Booch() {



  return (
    <div>
      {Drinks.map((drink, index) =>
        <Home
          name={drink.name}
          brand={drink.brand}
          price={drink.price}
          flavor={drink.flavor}
        />



      )}
    </div>
  );}

export default Booch;
