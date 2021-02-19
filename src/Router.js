import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home';

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                { this.props.children }
            </BrowserRouter>
        )
    }
}

export default Router
