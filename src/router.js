import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from './login'
import Todo from './todo'

const Routes = () => {
    <Router>
        <Route exact path = "/" component={Login} />
        <Route path='/todo' component={Todo} />
    </Router>
}

export default Routes