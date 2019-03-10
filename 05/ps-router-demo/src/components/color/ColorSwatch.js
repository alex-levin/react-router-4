import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

const ColorSwatch = (props) => {

    let style = {
        backgroundColor: props.color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin: 15
    };

    return (
        <div style={style}>
            <h2>{props.text}</h2>
            <h3>{props.match.path}</h3>
        </div>
    );

};

ColorSwatch.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// The withRouter higher order component adds the router's history, location, and match properties
// to the ColorSwatch component located under the router.
export default withRouter(ColorSwatch);