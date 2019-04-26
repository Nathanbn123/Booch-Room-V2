import React from 'react';
import Header from './Header';
import Home from './Home';
import Booch from './Booch';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      brand: null,
      flavor: null,
      price: null,
      pints: 25
    };
    this.editBooch = this.editBooch.bind(this);
  }

  sellSomeBooch() {
  this.setState({pints : (this.state.pints - 1) } ) ;
  }

  editBooch(name, brand, flavor, price) {
      this.setState({name : (this.state.name = name)})
      this.setState({brand : (this.state.name = brand)})
      this.setState({flavor : (this.state.name = flavor)})
      this.setState({price : (this.state.name = price)})
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
