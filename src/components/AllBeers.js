import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllBeers = () => {
	let [beers, setBeers] = useState(['Loading Beers'])

	useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
			setBeers(res.data)
		})
	}, [])

	const showBeers = () => {
		return beers.map((eachBeer) => {
			return (
				<li className='beerList'>
					<div>
						<Link to={`/alleers/${eachBeer._id}`}>{eachBeer.name} </Link>{' '}
						<img src={eachBeer.image_url} />
					</div>
				</li>
			)
		})
	}
	return <div className='allBeer'>{showBeers()}</div>
}

export default AllBeers
