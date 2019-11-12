import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import Form from './components/form';
import Form from './components/form2';

const App = () => (
	<div className="app">
		<h1>Welcome to Sweater Weather!</h1>

		<Form />

		<div className="response">

		</div>
		
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
