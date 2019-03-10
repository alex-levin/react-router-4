import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/* 
Custom link. Now why would I want a custom link? I might want to log an event ID, 
say from the click event into our linked tracking system.
It is used in place of Link in LogginHome.
and has handleClick custom link handler.

Commented code produces
Warning: React does not recognize the `staticContext` prop
https://reactjs.org/warnings/unknown-prop.html

class LoggingLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <Link {...this.props}
                    onClick={this.handleClick}
            >{this.props.children}</Link>
        );
    };
    handleClick = () => {

        let urlParts = this.props.to.split('/');
        const eid = urlParts[urlParts.length-1];

        alert('Clicking the Link is Logging: ' + eid);
    };
}
*/

class LoggingLink extends React.Component {
    constructor(props) {
        super(props);
        // The spread operator can be used to pull variables off props, and put the remaining props into a variable.
        // https://reactjs.org/warnings/unknown-prop.html
        const { staticContext, ...rest } = this.props;
        this.staticContext = staticContext;
        this.rest = rest;
    }
    render = () => {
        return (
            <Link {...this.rest} onClick={this.handleClick}>
                {this.props.children}
            </Link>
        );
    };
    handleClick = () => {
        let urlParts = this.rest.to.split('/');
        const eid = urlParts[urlParts.length - 1];

        alert('Clicking the Link is Logging: ' + eid);
    };
}

LoggingLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default withRouter(LoggingLink);
