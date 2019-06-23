import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducer';

import './index.css';
import App from './container/App';
import 'tachyons';


const store = createStore(searchRobots);

ReactDOM.render(


	<div>
	{ /*
		<Card name = {robots[0].name} id = {robots[0].id} email = {robots[0].email}/>
		<Card name = {robots[1].name} id = {robots[1].id} email = {robots[1].email}/>
		<Card name = {robots[2].name} id = {robots[2].id} email = {robots[2].email}/>
		<Card name = {robots[3].name} id = {robots[3].id} email = {robots[3].email}/>

	*/}
 
		<Provider store = {store}>
		<App />
		</Provider>
	</div>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

