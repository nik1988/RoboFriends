import React, { Component } from "react";
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import {setSearchField} from '../action';

const mapStateToProps = state => {

	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) =>{

	return{

		onSearchChange : (event) => dispatch(setSearchField(event.target.value))
	}

}
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};

		this.newSearch = "";
		console.log("constructor called");
	}


	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	render() {
		
		const {robots} = this.state;

		const {searchField,onSearchChange} = this.props;

		let robofilter = robots.filter(robots => {
			//return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			return robots.name
				.toLowerCase()
				.includes(searchField.toLowerCase());
		});

		if (robots.length === 0) {
			return (
				<div>
					<article className="vh-100 dt w-100 ">
						<div className="dtc v-mid">
							<h1 className="tc">Loading....</h1>
						</div>
					</article>
				</div>
			);
		} else {
			return (
				<div>
					<h1 className="tc fw5 f1"> RoboFriends </h1>
					<SearchBox onSearch={onSearchChange} />

					<Scroll>
						<CardList robots={robofilter} />
					</Scroll>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
