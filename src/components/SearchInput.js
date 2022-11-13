import React, { Component } from "react"

class SearchInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
            searchInput: "",
        }
	}
    
	handleInput = (e) => {
		let inputValue = e.target.value
		this.props.handleInput(inputValue)
	}

	render() {
        let searchInput = this.props.searchInput
		return (
			<input
				className="search-input"
				type="text" 
				placeholder="Search movie"
				value={searchInput}
				onChange={this.handleInput}
			></input>
		)
	}
}

export default SearchInput
