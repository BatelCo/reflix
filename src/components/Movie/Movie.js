import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Movie.css"


class Movie extends Component {
	rentMovie = () => {
		this.props.rentMovie(this.props.movieInfo.id)
	}
	unrentMovie = () => {
		this.props.unrentMovie(this.props.movieInfo.id)
	}
	getImgElement = function (movieInfo) {
		return (
			<Link to={`/movie/${movieInfo.id}`}>
				<img className="movie-img" src={movieInfo.img} />
			</Link>
		)
	}

	getMinimizedMovieToRender = (isRented, movieInfo) => {
		return (
			<div className="mini-movie">
				<span
					className="select-button"
					onClick={isRented ? this.unrentMovie : this.rentMovie}
				>
					{isRented ? "-" : "+"}
				</span>
				{this.getImgElement(movieInfo)}
			</div>
		)
	}

	getDetailedMovieToRender = (movieInfo) => {
		return (
			<div className="movie">
				<p className="title">
					{movieInfo.title} ({movieInfo.year})
				</p>
				{this.getImgElement(movieInfo)}
				<p className="desc">{movieInfo.descrShort}</p>
			</div>
		)
	}

	render() {
		const movieInfo = this.props.movieInfo
		const showDetails = this.props.showDetails
		const isRented = this.props.rented
		return showDetails
			? this.getDetailedMovieToRender(movieInfo)
			: this.getMinimizedMovieToRender(isRented, movieInfo)
	}
}

export default Movie
