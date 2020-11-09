import React, { Component } from "react";

import { SearchBox } from "./components/search-box/SearchBox";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	async componentDidMount() {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const json = await response.json();
		await this.setState({ monsters: json });
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value }, () => console.log(this.state));
	};
	render() {
        
        const { monsters, searchField } = this.state;
        console.log(monsters)
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monsters</h1>
				<SearchBox placeholder={"search monsters"} handleChange={this.handleChange} />

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
