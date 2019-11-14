import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FormContainer from './containers/formContainer';

const App = () => (
	<div className="app">
		<h1 className="display-2 mt-3">Weather Channel 24</h1>
		<FormContainer/>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'));