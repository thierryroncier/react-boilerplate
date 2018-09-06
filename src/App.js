// Import modules.
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import CSS.
import './css/react.css';

// Import views.
import HomeView from './views/Home/HomeView';
import ExampleView from './views/Example/ExampleView';
import NoMatchView from './views/NoMatch/NoMatchView';

// Import components.
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Init application.
class App extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={HomeView} />
					<Route exact path="/example" component={ExampleView} />
					<Route component={NoMatchView} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;