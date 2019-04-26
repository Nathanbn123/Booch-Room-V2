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
      boochList: [],
      name: null,
      brand: null,
      flavor: null,
      price: null,
      pints: 25
    };
    this.handleAddNewBooch = this.handleAddNewBooch.bind(this);
    this.editBooch = this.editBooch.bind(this);
  }

  sellSomeBooch() {
    this.setState({pints : (this.state.pints - 1) } ) ;
  }

  editBooch(name, brand, flavor, price) {
    this.setState({name : (this.state.name = name)});
    this.setState({brand : (this.state.name = brand)});
    this.setState({flavor : (this.state.name = flavor)});
    this.setState({price : (this.state.name = price)});
  }

  handleAddNewBooch(newBooch){
    var newBoochList = this.state.boochList.slice();
    newBoochList.push(newBooch);
    this.setState({boochList: newBoochList});
  }





  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home, Booch}/>
          <Route path='/Admin' render={()=><Admin
              boochList={this.state.boochList}
              onAddNewBooch={this.handleAddNewBooch}
              onEditBooch={this.editBooch}/>}/>
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
