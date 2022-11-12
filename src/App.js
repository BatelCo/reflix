import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { Component } from "react"
import BadLogin from "./components/badLogin"
import Catalog from "./components/catalog"
import Movie from "./components/movie"
import UserSelection from "./components/Users"
import constants from './constants' 


class App extends Component {
	constructor() {
		super()
		this.state = {
			currentUser: null,
			users: [
				{
					name: "Or",
					budget: 10,
					img: "https://www.freeiconspng.com/thumbs/minions-png/minion-with-guitar-png-31.png",
					rented: [],
				},
				{
					name: "Nir",
					budget: 10,
					// img: "https://www.freeiconspng.com/thumbs/minions-png/minions-png-file-8.png",
					img:"https://www.freepnglogos.com/uploads/minions-png/minions-shoeps-19.png",
					rented: [],
				},
				{
					name: "Batel",
					budget: 10,
					img: "https://www.pngplay.com/wp-content/uploads/2/Minions-No-Background.png",
					rented: [],
				},
				{
					name: "Orya",
					budget: 10,
					img: "https://www.freeiconspng.com/uploads/file-bob-the-minion-png-0.png",
					rented: [],
				},
			
			],
			movies: [
				{
					id: 0,
					isRented: false,
					title: "Tarzan",
					year: 1999,
					img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
					descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
				},
				{
					id: 1,
					isRented: false,
					title: "The Lion King",
					img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
					year: 1994,
					descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
				},
				{
					id: 2,
					isRented: false,
					title: "Beauty and the Beast",
					year: 1991,
					img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
					descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
				},
				{
					id: 3,
					isRented: false,
					title: "The Sword in the Stone",
					year: 1963,
					img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
					descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
				},
				{
					id: 4,
					isRented: false,
					title: "Beauty and the Beast",
					year: 2016,
					img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
					descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
				},
			],
		}
	}

	selectUser = (userName) => {
		this.setState({ currentUser: userName })
	}

	rentMovie = (movieId) => {
		const state = this.state
		const currentUserDetails = state.users.find(
			(u) => u.name === state.currentUser
		)

		if (currentUserDetails.budget >= constants.MOVIE_COST) {
			const updatedUsers = [...state.users]
			const user_index = updatedUsers.findIndex(
				(u) => u.name === state.currentUser
			)
			updatedUsers[user_index].rented.push(movieId)
			updatedUsers[user_index].budget -= constants.MOVIE_COST
			this.setState({
				users: [...updatedUsers],
			})
		}
	}

	unrentMovie = (movieId) => {
		const state = this.state
		const currentUserDetails = state.users.find(
			(u) => u.name === state.currentUser
		)

		if (currentUserDetails.rented.includes(movieId)) {
			const updatedUsers = [...state.users]
			const user_index = updatedUsers.findIndex(
				(u) => u.name === state.currentUser
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
		const state = this.state
		const movies = state.movies
		const currentUser = state.currentUser
		const currentUserDetails = state.users.find(
			(u) => u.name === currentUser
		)

		return (
			<Router>
				<div className="App">
					<div id="home-background"></div>
					<div className="header">
						<div id="nav-bar">
							<Link to="/">Profiles</Link> 
							<Link to="/catalog">Catalog</Link>
						</div>
						<div id="app-name">Reflix</div>
					</div>
				
					</div>
				</div>
			</Router>
		)
	}
}

export default App
