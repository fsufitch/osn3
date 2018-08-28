import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const comingSoonPopup = () => {
    alert("Resume coming soon!");
}

export const Nav = (props: { collapsed: boolean }) => {
    let navClass = "nav nav-pills flex-column d-none " + (props.collapsed ? "d-md-flex" : "d-flex");
    return (
        <div>
            <hr className={"d-none d-md-flex " + (props.collapsed ? "" : "d-flex")} />
            <nav className={navClass}>
                <NavLink className="nav-link" activeClassName="active" to="/about">About Me</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                <a className="nav-link" href="javascript:void(0)" onClick={comingSoonPopup}>
                    Resume <FaExternalLinkAlt />
                </a>
                <a className="nav-link" href="https://medium.com/@fsufitch">
                    Blog <FaExternalLinkAlt />
                </a>
            </nav>
        </div>
    );
}