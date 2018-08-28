import * as React from 'react';

import {NavLink} from 'react-router-dom';

export class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <nav className="nav flex-column">
                <NavLink activeClassName="active" to="/foo">Foo</NavLink>
                <NavLink activeClassName="active" to="/bar">Bar</NavLink>               
            </nav>
        )
    }
}