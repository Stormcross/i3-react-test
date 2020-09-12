import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AnnualReport from './Component/pages/AnnualReport';
import FinancialHighlights from './Component/pages/FinancialHighlights';
import FrontPage from './Component/pages/FrontPage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={FrontPage}/>
        <Route path='/annualReport' exact component={AnnualReport}/>
        <Route path='/financialHighlights' exact component={FinancialHighlights}/>
      </Switch>
    </Router>
  );
}

export default App;
