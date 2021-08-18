import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}