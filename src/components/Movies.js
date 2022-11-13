import React, { Component } from "react"
import Movie from "./Movie"
import "../styles/Movies.css"
import SearchInput from './SearchInput'


class Movies extends Component {
	constructor() {
		super()
		this.state = {
			searchInput: "",
		}
	}

	rentMovie = (movieId) => {
		this.props.rentMovie(movieId)
	}
	unrentMovie = (movieId) => {
		this.props.unrentMovie(movieId)
	}

	getMovieElement = (details, key, isRented) => (
		<Movie
			key={key}
			movieInfo={details}
			showDetails={false}
			rentMovie={this.rentMovie}
			unrentMovie={this.unrentMovie}
			rented={isRented}
		/>
	)

	getMovieContainerElement = (movies, isRent) => {
		return (
			<div className="movies-container">
				{movies.map((a, v) => this.getMovieElement(a, v, isRent))}
			</div>
		)
	}

	getInputFilterElement = () => {
		const searchInput = this.state.searchInput
		return (
			<SearchInput searchInput={searchInput} handleInput={this.handleInput}></SearchInput>
		)
	}

	handleInput = (value) => {
		this.setState({ searchInput: value })
	}

	isSubStrIns = (str, substr) =>
		str.toLowerCase().includes(substr.toLowerCase())

	render() {
		const search = this.state.searchInput
		const movies = this.props.movies
		const filteredMovies = movies.filter((m) => this.isSubStrIns(m.title, search))
		const userDetails = this.props.user
		const userRent = userDetails.rented
		let rentedMovies = filteredMovies.filter((m) => userRent.includes(m.id))
		let availableMovies = filteredMovies.filter((m) => !userRent.includes(m.id))
		return (
			<div id="catalog">
				<div className="footer">
					{this.getInputFilterElement()}
					<span className="budjet-indicator">
						Budget: {userDetails.budget}
					</span>
				</div>
				{this.props.user.rented.length > 0 ? <h2>Rented:</h2>: ""}
				{this.getMovieContainerElement(rentedMovies, true)}
				<h2>Catalog:</h2>
				{this.getMovieContainerElement(availableMovies, false)}
			</div>
		)
	}
}

export default Movies
