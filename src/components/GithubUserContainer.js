import React from 'react';
import axios from 'axios';
import GithubUsers from './GithubUsers'
import './GithubUserContainer.css'

class GithubUserContainer extends React.Component {
	state = {
		usernames: ["lukecparr", "tetondan", "dustinmyers", "luishrd", "bigknell"],
		users: []
	}

	componentDidMount() {
		this.state.usernames.forEach((username) => {axios.get(`https://api.github.com/users/${username}`)
			.then((r) => this.setState({users: [...this.state.users, r.data]}))
	})}


	render() {
		return(
			<div className="container">
				{this.state.users.map((user) => {
					return(
						<div className='cards'>
							<GithubUsers user={user} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default GithubUserContainer;