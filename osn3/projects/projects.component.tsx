import * as React from 'react';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';

import './projects.styles.scss';

export const Projects = () => (
    <div> 
        <h2> Projects </h2>
        <p>
            Software engineering is both my career and my hobby. Inspiration flows 
            between both these aspects, leading to all sorts of fun stuff. Sometimes
            I experiment in my free time using the same tech I use in the office;
            other times, free time tinkering brings fresh ideas for improving my
            professional projects. Whichever the case, it is always a venue for 
            continued learning and self-improvement.
        </p>
        <p> 
            To see the sort of stuff I work on, you can always 
            {' '} <a href="http://github.com/fsufitch">check me out on Github</a>. I 
            always open source if I can. However, most of my ideas do not often 
            take off, so here's a few highlights:
        </p>

        <hr />
    
        <div className="clearfix">
            <img className="project-img outer" src={require('./boarbot.png')} />
            <h3> Discord Boar Bot </h3>
            <img className="project-img inner" src={require('./boarbot.png')} />
            <p>
                I am an avid member of a small community of gamers. To enable playing
                a variety of games together, we use a <a target="_blank" href="https://discord.gg">Discord</a> server.
                To assist in operating it smoothly, I put together a small
                bot &mdash; complete with both useful and fun features.
            </p>
            <p> 
                It is written in Python, on top of the <a target="_blank" href="https://discordpy.readthedocs.io/en/latest/">discordpy</a> library, 
                and served as a stepping stone to learning all about Python's asynchronous 
                processing using <code>asyncio</code>. It is deployed using a simple Heroku setup,
                and currently live.
            </p>
            <p> 
                Check it out: {' '}
                <a target="_blank" href="https://github.com/fsufitch/discord-boar-bot"><FaGithubSquare /> on Github</a>
            </p>
        </div>

        <hr />

        <div className="clearfix">
            <img className="project-img outer" src={require('./preztweet.png')} />
            <h3> Preztweeting.com </h3>
            <img className="project-img inner" src={require('./preztweet.png')} />
            <p>
                Preztweeting.com is a simple web interface for comparing the Twitter usage
                of the 44<sup>th</sup> and 45<sup>th</sup> presidents of the USA. It is a
                tongue-in-cheek attempt to discern what "modern day presidential" tweeting
                is.
            </p>
            <p> 
                It is written as a Go back-end with an Angular front-end. Tweets are indexed
                in a Postgres database, and the whole application is designed with design in
                mind. It is deployed via Heroku cloud services.
            </p> 
            <p>
                Check it out: {' '}
                <a target="_blank" href="https://www.preztweeting.com"><FaExternalLinkAlt /> on the web</a>{' | '}
                <a target="_blank" href="https://github.com/fsufitch/prez-tweet"><FaGithubSquare /> on Github</a>
            </p>
        </div>

        <hr />

        <div className="clearfix">
            <img className="project-img outer" src={require('./pyfa.png')} />
            <h3> Pyfa (contributor) </h3>
            <img className="project-img inner" src={require('./pyfa.png')} />
            <p>
                As an enthusiastic player of the space-themed 
                MMORPG <a target="_blank" href="https://eveonline.com">Eve Online</a>, 
                Pyfa (Python Fitting Assistant) was an invaluable 3<sup>rd</sup> party tool. 
                Working together with the authors, I made a significant contribution, 
                adding "jargon-aware" search functionality, so users could more easily
                find the right items to fit to their spaceships.
            </p>
            <p> 
                Pyfa is a desktop application written using {' '}
                <a target="_blank" href="https://www.wxwidgets.org/">wxWidgets</a>, 
                though my contribution is buried <a target="_blank" href="https://github.com/pyfa-org/Pyfa/pull/1513">deeper in its plumbing</a>.
            </p>
            <p>
                Check it out: {' '}
                <a target="_blank" href="https://github.com/pyfa-org/Pyfa#pyfa"><FaGithubSquare /> on Github</a>
            </p>
        </div>

        <hr />

        <div className="clearfix">
            <img className="project-img outer" src={require('./gitgud.png')} />
            <h3> git gud </h3>
            <img className="project-img inner" src={require('./gitgud.png')} />
            <p>
                At several hundred "stars" on Github, this is inexplicably my most popular
                project, despite it being a joke based on <a target="_blank" href="https://knowyourmeme.com/memes/git-gud">an Internet meme</a>.
                It's just a simple script extension for <code>git</code>, letting it respond
                to the command <code>git gud</code>.
            </p>
            <p>
                <code>git gud</code> is a small Python package that interacts as part of the
                with the <code>git</code> command line. It is published via the Python Package Index.
            </p>
            <p>
                Check it out: {' '}
                <a target="_blank" href="https://github.com/fsufitch/git-gud"><FaGithubSquare /> on Github</a>{' | '}
                <code>pip install gitgud</code>
            </p>
        </div>

        <hr />

        <div className="clearfix">
            <img className="project-img outer" src={require('./filebouncer.png')} />
            <h3> File Bouncer </h3>
            <img className="project-img inner" src={require('./filebouncer.png')} />
            <p>
                File Bouncer is a prototype file transfer system. Choose a file, send the link to
                its recipients, then start the upload. The relay server then streams the file chunk 
                by chunk, never storing it locally. It was coded during a very boring flight with 
                no Internet access.
            </p>
            <p>
                It is built using Go, making heavy use of its asynchonous native features. It comes
                complete with a server and a CLI upload utility. Try it with <code>wget</code> 
                or <code>curl</code> when downloading!
            </p>
            <a target="_blank" href="https://opensourcenerd.com:8080"><FaExternalLinkAlt /> on the web</a> <small>(test instance, please do not overload)</small> {' | '}
            <a target="_blank" href="https://github.com/fsufitch/prez-tweet"><FaGithubSquare /> on Github</a>
        </div>

    </div>
)