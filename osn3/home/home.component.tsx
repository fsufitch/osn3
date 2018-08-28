import * as React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => (
    <div className="d-flex flex-column align-items-center">
        <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
                You've found my little corner of the Internet! Congratulations!
            </p>
            <hr className="my-4" />
            <p>
                This site is the "online presence" of <em>Filip Sufitchi</em>.
                Here you will find a variety of details about my experience, projects,
                interests, and more.
            </p>
            <Link to="/about" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
        </div>
        <div style={{ maxWidth: "450px"}}>
            <img className="img-fluid"  src={require("./200ok.jpg")} />
        </div>
        
    </div>
)