import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Admin(props) {
  let _name = null;
  let _brand = null;
  let _flavor = null;
  let _price = null;

  function handleAddNewBooch(event) {
    event.preventDefault();
    console.log(_name.value);

    props.onAddNewBooch({name: _name.value, brand: _brand.value, flavor: _flavor.value,
      price: _price.value});
    _name.value = '';
    _brand.value = '';
    _flavor.value = '';
    _price.value = '';
  }



  return(
    <div>
      <a><Link to='/' style={{ textDecoration: 'none', cursor: 'crosshair' }}><button>Home</button></Link></a>

      <h2>Add a keg!</h2>
      <form onSubmit={handleAddNewBooch}>
        <input type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>

        <input type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>

        <input type='text'
          id='flavor'
          placeholder='Flavor'
          ref={(input) => {_flavor = input;}}/>

        <input  type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>

        <br/>

        <button>Submit!</button>
      </form>

      <form>
        <h2>Edit a keg!</h2>
        <input/>
        <input></input>
        <input></input>
        <input></input>
        <br/>
        <button type='submit' onSubmit={props.onEditBooch}>Submit!</button>
      </form>

      <style jsx> {`
          div {
            text-align: center;

          }

          `}</style>
    </div>
  );
}

Admin.propTypes = {
  onEditBooch: PropTypes.func,
  onAddNewBooch: PropTypes.func
};


export default Admin;
