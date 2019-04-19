import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';
import MonthlyProduce from './MonthlyProduce';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/weekly' component={WeeklySchedule} />
          <Route exact path='/produce' component={MonthlyProduce} />

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

export default App;
