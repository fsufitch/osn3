import * as React from 'react';

import {UptimeTimer} from './timer.component';



export class HelloWorld extends React.Component<{}, {}> {
    render() {
        let launchTime = parseInt(process.env.LAUNCH_TIME);
        return (
        <div>
            <h1>It works!</h1>
            <p> Hello, world! </p>
            <UptimeTimer since={launchTime} />
        </div>
        );
    }
}