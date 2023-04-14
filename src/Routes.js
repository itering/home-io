import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {asyncComponent} from "./components/AsyncComponent";
import { createBrowserHistory} from "history";
// const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncHome2 = asyncComponent(import("./page/Home/index2"));
const AsyncNews = asyncComponent(import("./page/News"));
const AsyncAbout = asyncComponent(import("./page/About"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

const history = createBrowserHistory();


const Routes = () =>
    <Router history={history}>
        <Switch>
            {/* <Route
                exact
                component={AsyncHome}
                path='/'
            /> */}
            <Route
                exact
                component={AsyncHome2}
                path='/'
            />
            <Route
                exact
                component={AsyncAbout}
                path='/jobs'
            />
            <Route
                exact
                component={AsyncNews}
                path='/news'
            />

            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>

export default Routes;
