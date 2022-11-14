import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { Component } from "react"
import Movies from "./components/Movies"
import Movie from "./components/Movie/Movie"
import UserSelection from "./components/Users"
import constants from './constants'
import appData from './AppData'

class App extends Component {
	constructor() {
		super()
		this.state = {
			currentUser: null,
			users: appData.usersData,
			movies: appData.moviesData,
		}
	}

	selectUser = (userName) => {
		this.setState({ currentUser: userName })
	}

	rentMovie = (movieId) => {
		const currentUserDetails = this.state.users.find(
			(u) => u.name === this.state.currentUser
		)

		if (currentUserDetails.budget >= constants.MOVIE_COST) {
			const updatedUsers = [...this.state.users]
			const user_index = updatedUsers.findIndex(
				(u) => u.name === this.state.currentUser
			)
			updatedUsers[user_index].rented.push(movieId)
			updatedUsers[user_index].budget -= constants.MOVIE_COST
			this.setState({
				users: [...updatedUsers],
			})
		}
	}

	unrentMovie = (movieId) => {
		const currentUserDetails = this.state.users.find(
			(u) => u.name === this.state.currentUser
		)

		if (currentUserDetails.rented.includes(movieId)) {
			const updatedUsers = [...this.state.users]
			const user_index = updatedUsers.findIndex(
				(u) => u.name === this.state.currentUser
			)
			const movieIndex = updatedUsers[user_index].rented.indexOf(movieId)
			updatedUsers[user_index].rented.splice(movieIndex, 1)
			updatedUsers[user_index].budget += constants.MOVIE_COST
			this.setState({
				users: [...updatedUsers],
			})
		}
	}

	render() {
		const currentUserDetails = this.state.users.find((u) => u.name === this.state.currentUser)
		return (
			<Router>
				
				<div className="App">
					<div className="header">
						<div id="app-name"> Reflix </div>
						<div id="nav-bar">
							<Link to="/"> Profiles </Link> 
							{this.state.currentUser ? <Link to="/catalog"> Catalog </Link>: ""}
						</div> 
					</div>
					<div className="reflix-interface">

						<Route exact path="/"
							render={() => ( <UserSelection
								users={this.state.users}
								selectUser={this.selectUser} /> )}
						/>

						<Route exact path="/catalog"
							render={() => <Movies
										user={currentUserDetails}
										movies={this.state.movies}
										rentMovie={this.rentMovie}
										unrentMovie={this.unrentMovie}
									/>
							}
						/>

						<Route exact path="/movie/:id"
							render={({ match }) => <Movie
										match={match}
										key={match.params.id}
										movieInfo={this.state.movies.find(
											(m) => m.id == match.params.id
										)}
										showDetails={true}
										rentMovie={this.rentMovie}
										unrentMovie={this.unrentMovie}
										rented={false}
									/>
								}
						/>
					</div>
				</div>
			</Router>
		)
	}
}

export default App
