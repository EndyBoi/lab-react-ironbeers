import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className='nav'>
			<Link to='/'>Home</Link>
			<Link to='/AllBeers'>All Beers</Link>
			<Link to='/RandomBeer'>Random Beer</Link>
			<Link to='/NewBeer'>New Beer</Link>
		</div>
	)
}

export default NavBar
