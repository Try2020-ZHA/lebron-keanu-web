import React from 'react';
import './App.css';
import PositionPage from './pages/positionPage'
import '../node_modules/antd/dist/antd.css'
import {HashRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route component={PositionPage} exact path='/'></Route>
      </HashRouter>
    </div>
  );
}

export default App;
