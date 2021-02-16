import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomBeer = () => {
	let [beer, setBeer] = useState({})
	useEffect(() => {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers/random')
			.then((data) => {
				setBeer(data.data)
			})
	}, [])
	const style = {
		width: '100px',
	}
	return (
		<div>
			<img style={style} src={beer.image_url} />,{beer.name}
		</div>
	)
}

export default RandomBeer
