import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { Layout } from 'antd'

import Home from './pages/Home'
import Community from './pages/Community'
import My from './pages/My'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Route path='/' exact component={Home} />
          <Route path='/community' component={Community} />
          <Route path='/my' component={My} />
        </Layout>
      </Router>
    )
  }
}

export default App
