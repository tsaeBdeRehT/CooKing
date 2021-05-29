import React from "react";
import { Switch, Route } from 'react-router-dom'


const Main = () => {
    return(
        <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/new">

            </Route>
            <Route path="/fast">

            </Route>
            <Route path="/medium">

            </Route>
            <Route path="/long">

            </Route>
        </Switch>
    )
}

export default Main;