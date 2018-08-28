import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from 'osn3/navigation';

import './app.styles.scss';
import { HelloWorld } from '../hello/hello.component';

const Foo = () => (
    <p> Foo! </p>
);

const Bar = () => (
    <p> Bar! </p>
);

export class App extends React.Component<{}, {}> {
    render() {
        let launchTime = parseInt(process.env.LAUNCH_TIME);
        return (


            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <Navigation />
                        </div>
                        <div className="col">
                            <Route path="/foo" component={Foo}/>
                            <Route path="/bar" component={Bar}/> 
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

