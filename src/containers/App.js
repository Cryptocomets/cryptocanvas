import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Homepage'
import Canvas from './Canvas'
import About from './About'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Canvas} />
          <Route path='/about' component={About} />
          <Route path='/canvas/:id' component={Canvas} />
        </div>
      </Router>
    )
  }
}

export default App