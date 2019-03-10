import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropViewer from './components/PropViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/color/ColorSwatch';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
						/* Route's props history, location, and match are passed to Home, NameForm, and PropViewer */
                        <Route path='/' component={Home} exact/>
                        <Route path='/prompt' component={NameForm} />
                        <Route path='/props' component={PropViewer} />
						
                        /* Using Route's render prop to pass some props to a
                        component (ColorSwatch). Route's props history,
                        location, and match are not passed. Using withRouter in
                        ColorSwatch to access the route's props. We can also pass
                        the router's props explicitly: render=
                        {props => {
                            return (
                                <ColorSwatch
                                    text="Red"
                                    color="#ff0000"
                                    {...props}
                                />
                            );
                        }}
                        We would not need then to export ColorSwatch with
                        withRouter. */
                        <Route
                            path="/color"
                            render={() => {
                                return (
                                    <ColorSwatch text="Red" color="#ff0000" />
                                );
                            }}
                        />

                        <Route component={PageNotFound} />
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;