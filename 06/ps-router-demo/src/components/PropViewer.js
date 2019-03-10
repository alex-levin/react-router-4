import React from 'react';

const PropViewer = ({match, location}) => {

    return (
        <div>
            location.key: {location.key} <br/>
			location.pathname: {location.pathname} <br/>
			match.path: {match.path} <br/>
			match.isExact: {match.isExact}
        </div>
    );

};

export default PropViewer;
