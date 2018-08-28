import * as React from 'react';

interface AboutState {
    showContact: boolean;
    contactData: {
        email: string,
        phone: string,
    };
}

const encodedEmail = 'ZnN1Zml0Y2hpQGdtYWlsLmNvbQo=';
const encodedPhone = 'MS01NzEtMzU0LTgwODgK';

export class About extends React.Component<{}, AboutState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showContact: false,
            contactData: {
                email: '##########',
                phone: '##########',
            },
        };
    }

    private showContactInfo() {
        this.setState({
            showContact: true,
            contactData: {
                email: atob(encodedEmail),
                phone: atob(encodedPhone),
            }
        });
    }

    render() {
        return (
            <div>
                <h2> About Me </h2>
                <hr />
                <h4> Filip Sufitchi - Full Stack Software Engineer</h4>
                <p>
                    I'm a 20-something nerd looking to code interesting stuff and perhaps make the
                    world a better place while I'm at it. I am currently working at {' '}
                    <a href="http://www.imagemattersllc.com/">Image Matters LLC</a> as
                    a Software Engineer, subcontracting for <a href="https://home.geointservices.io/">GeoInt Services</a>.
                    I mainly work on the Beachfront project, building a web-based platform for quick
                    analysis of shorelines automatically extracted from satellite imagery.
                </p>

                <h4> Why "Open Source Nerd"?</h4>
                <p>
                    I firmly believe that the vast majority of software &mdash;
                    and any that is reusable in particular &mdash; would benefit from being
                    open source. I received this domain registration as a gift in the past,
                    as a semi tongue-in-cheek acknowledgement of my open source advocacy.
                </p>
                <p> Also, why not? </p>

                <h4> Contact Info </h4>

                <p>
                    <strong>Email/Hangouts:</strong> {this.state.contactData.email} <br />
                    <strong>Phone:</strong> {this.state.contactData.phone}
                </p>

                <p className={'font-weight-light text-info ' + (this.state.showContact ? 'd-none': '')}>
                    <button className="btn btn-success" onClick={() => this.showContactInfo()}>Show contact info</button> 
                    <br />
                    To avoid crawlers getting my info too easily, a little bit of user interaction
                    is required to decode it and make it visible.
                </p>

            </div>
        );
    }
}
