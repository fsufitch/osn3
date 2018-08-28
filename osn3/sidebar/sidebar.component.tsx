import * as React from 'react';

import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './sidebar.styles.scss';
import { Nav } from './nav.component';
import { Footer } from './footer.component';

interface NavigationState {
    responsiveCollapsed: boolean;
}

export class Sidebar extends React.Component<{}, NavigationState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            responsiveCollapsed: true,
        }
    }
    
    private toggleResponsiveNavigation() {
        this.setState({
            responsiveCollapsed: !this.state.responsiveCollapsed,
        })

    }
    
    render() {
        return (
            <div className="navigation d-flex flex-column flex-grow-1 justify-content-between">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h2 style={{ whiteSpace: "nowrap" }}>
                            <Link to="/"> ~fsufitch/ </Link> @ web
                        </h2>
                        <div className="d-md-none">
                            <button className="btn btn-primary nav-toggler" type="button" onClick={() => this.toggleResponsiveNavigation()}>
                                <FaBars />
                            </button>
                        </div>
                    </div>
                    <Nav collapsed={this.state.responsiveCollapsed} />
                </div>
              
                <Footer collapsed={this.state.responsiveCollapsed}/>
            </div>
        )
    }
}