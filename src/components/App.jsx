import React from 'react';
import Header from './Header';
import Home from './Home';
import Booch from './Booch';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      brand: null,
      flavor: null,
      price: null,
      pints: 25
    };
  }

  sellSomeBooch() {
    this.state.pints - 1;

  }





  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home, Booch}/>
          <Route exact path='/Admin' component={Admin}/>
          <Route component={Error404}/>
        </Switch>


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
  }
export default App;
