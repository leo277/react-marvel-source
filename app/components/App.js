import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import Home from './Home';
import Header from './Header';

class App extends Component {
	constructor() {
		super();
	}
	render() {
		const muiTheme = createMuiTheme({
		  palette: {
		    primary: {
		      light: '#ffffff',
		      main: '#f5f5f5',
		      dark: '#c2c2c2',
		      contrastText: '#000000',
		    },
			secondary: {
		      light: '#9c786c',
		      main: '#6d4c41',
		      dark: '#40241a',
		      contrastText: '#ffffff',
		    },
		  },
		});
		return(
			<MuiThemeProvider theme={muiTheme}> 
			  	<div>
					<div>
						<Header />
					</div>
					<div>
						<Home />
					</div>
				</div>
    		</MuiThemeProvider>
		);
	}
}

export default App;