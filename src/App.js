import React from 'react';
import './App.css';
import CreateOrder from './pages/createOrder'
import PositionPage from './pages/positionPage'
import '../node_modules/antd/dist/antd.css'

function App() {
  return (
	  <div className="App">
      <CreateOrder></CreateOrder>
      <PositionPage></PositionPage>
	  </div>
}

export default App;
