import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Sidebar } from 'osn3/sidebar';

import './app.styles.scss';
import { Home } from 'osn3/home';
import { About } from 'osn3/about';
import { Projects } from 'osn3/projects';

const NoMatch = () => (
    <img className="img-fluid" src={require('./404notfound.jpg')} />
)

export class App extends React.Component<{}, {}> {
    render() {
        let launchTime = parseInt(process.env.LAUNCH_TIME);
        return (
            <Router>
                <div id="app-container" className="container-fluid d-flex flex-column flex-md-row align-items-stretch justify-content-start">
                    <div id="app-sidebar" className="d-flex">
                        <Sidebar />
                    </div>
                    <div id="app-content" className="flex-grow-1">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/projects" component={Projects} /> 
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

