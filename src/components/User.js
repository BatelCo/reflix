import React, { Component } from "react"
import { Link } from "react-router-dom"

class User extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	selectUser = () => {
		this.props.selectUser(this.props.profile.name)
	}

	getProfileImg = (profile) => {
		return (
			<img
				src={profile.img}
				alt=""
				className="feature_image"
				onClick={this.selectUser}
			/>
		)
	}
	render() {
		let profile = this.props.profile
		return (
			<div className="user-box">
				<h4>{profile.name}</h4>
				<Link to="/catalog">{this.getProfileImg(profile)}</Link>
			</div>
		)
	}
}

export default User
