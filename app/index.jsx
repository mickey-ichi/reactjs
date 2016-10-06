import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Link} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal500, teal700, teal400, grey800} from 'material-ui/styles/colors';


import LoginComponent from './login/LoginComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';

injectTapEventPlugin();

class App extends React.Component {
    render() {
        return <div>
            {/*
            <ul>
                <li><Link to="/login" activeClassName="active">Login</Link></li>
                <li><Link to="/home" activeClassName="active">Home</Link></li>
            </ul>
            */}

            {this.props.children}
        </div>;
    }

}

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: LoginComponent },
    childRoutes: [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'login', component: LoginComponent
        }
    ]
};

const customTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: teal500,
        primary2Color: teal700,
        primary3Color: teal400,
        textColor: grey800
    }
});

class Root extends React.Component {
    render() {
        return <Router history={browserHistory} routes={routes} />;
    }
}

ReactDOM.render(<MuiThemeProvider muiTheme={customTheme}><Root/></MuiThemeProvider>, document.getElementById('app'));
