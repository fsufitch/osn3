import * as React from 'react';

import {FaGithubSquare, FaGooglePlusG, FaCodeBranch, FaLinkedin} from 'react-icons/fa';

export const Footer = (props: { collapsed: boolean }) => {
    let footerClass = "footer flex-column d-none " + (props.collapsed ? "d-md-flex" : "d-flex");
    return (
        <div className={footerClass}>
            <div className="d-flex flex-row justify-content-around">
                <a href="https://plus.google.com/+FilipSufitchi"><FaGooglePlusG /></a>
                <a href="https://www.linkedin.com/in/filip-sufitchi-0b9979b"><FaLinkedin /></a>
                <a href="https://github.com/fsufitch"><FaGithubSquare /></a>
                <a href="https://github.com/fsufitch/osn3"><FaCodeBranch /> </a>
            </div>
        </div>
    );
}