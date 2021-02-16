import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props} />} />
					<Route
						exact
						path='/AllBeers'
						render={(props) => <AllBeers {...props} />}
					/>
					<Route
						exact
						path='/RandomBeer'
						render={(props) => <RandomBeer {...props} />}
					/>
					<Route
						exact
						path='/NewBeer'
						render={(props) => <NewBeer {...props} />}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
