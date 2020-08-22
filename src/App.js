import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom'
import PositionPage from './pages/positionPage'
import '../node_modules/antd/dist/antd.css'

function App() {
  return (
	<div className="App">
		<HashRouter>
			<Route component={PositionPage} exact path='/' />
		</HashRouter>
	</div>
  );
}

export default App;
