import * as React from 'react';

export interface UptimeTimerProps {
    since: number;
}
export interface UptimeTimerState {
    displayTime: number;    
}

export class UptimeTimer extends React.Component<UptimeTimerProps, UptimeTimerState> {
    constructor(props: UptimeTimerProps) {
        super(props);
        this.state = {displayTime: this.getDisplayTime()};
    }

    private tick() {
        this.setState({
            displayTime: this.getDisplayTime(),
        })
    }

    private getDisplayTime() {
        return (Date.now() - this.props.since) / 1000
    }
    
    componentDidMount() {
        setInterval(() => {this.tick()}, 1000);
    }

    render() {
        return (
            <span>
                Server uptime: {this.state.displayTime} seconds
            </span>
        )
    }
}