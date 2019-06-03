import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { AppContext } from './AppContext'

import './App.css'

import { Layout } from 'antd'

import Home from './pages/Home'
import Community from './pages/Community'
import My from './pages/My'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '鲁Da师',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }
    }
    this.actions = {}
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          actions: this.actions
        }}
      >
        <Router>
          <Layout className="layout">
            <Route path='/' exact component={Home} />
            <Route path='/community' component={Community} />
            <Route path='/my' component={My} />
          </Layout>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
