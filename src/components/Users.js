import React, { Component } from "react"
import User from "./User"

class Users extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	selectUser = (userName) => {
		this.props.selectUser(userName)
	}

	getUserElement = (userDetails, value) => (
		<User key={value} profile={userDetails}selectUser={this.selectUser} />
	)

	render() {
		let users = this.props.users
		return (
			<div className="selection-container">
				<h3> WHO'S WATCHING? </h3>
				<div className="user-invetory">
					{users.map((u, v) => this.getUserElement(u, v))}
				</div>
			</div>
		)
	}
}

export default Users