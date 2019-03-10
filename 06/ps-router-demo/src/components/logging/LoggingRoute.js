import React from 'react';
import { Route } from 'react-router-dom';

/*
Custom Route. With custom routes we can accomplish all sorts of tasks. In this case, 
we're going to simulate that logging event again, but we can also do all kinds of different work.

Instead of usual 
const LoggingRoute = (props => {
we are going to put in an object { component: ComponentToRender} and we are spreading 
remaining JavaScript rest properties (other than component) across our custom route LoggingRoute:
const LoggingRoute = ({ component: ComponentToRender, ...rest }) => {
We are decomposing passed props here:
<LoggingRoute path={`${match.url}/lorem/:eid`} component={Lorem} />
Our ComponentToRender is substituted with the Lorem component.

<Route {...rest} - we are spreading remaining JavaScript properties (other than component) across Route.
*/
const LoggingRoute = ({ component: ComponentToRender, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                alert('Route is Logging ' + props.match.params.eid);
                return <ComponentToRender {...props} />;
            }}
        />
    );
};

export default LoggingRoute;
