import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
	return (
		<div className='beerHome'>
			<div className='beerCard'>
				<div className='beerImg'>
					<Link exact to='/AllBeers'>
						<img src='/images/beers.png' alt='Get All Beers' />
					</Link>
				</div>
				<div className='beerText'>
					<h2>All Beers</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
				</div>
			</div>
			<div className='beerCard'>
				<div className='beerImg'>
					<Link exact to='/RandomBeer'>
						<img src='/images/random-beer.png' alt='Get Random Beer' />
					</Link>
				</div>
				<div className='beerText'>
					<h2>Random Beers</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
				</div>
			</div>
			<div className='beerCard'>
				<div className='beerImg'>
					<Link exact to='/NewBeer'>
						<img src='/images/new-beer.png' alt='Add New Beer' />
					</Link>
				</div>
				<div className='beerText'>
					<h2>New Beer</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
				</div>
			</div>
		</div>
	)
}

export default Home
