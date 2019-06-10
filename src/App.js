import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { AppContext } from './AppContext'

import './App.css'

import TopBar from './layout/TopBar'

import { Layout } from 'antd'

import Home from './pages/Home'
import Community from './pages/Community'
import Mine from './pages/Mine'
import MineCourse from './pages/MineCourse'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: true,
      user: {
        name: '鲁Da师',
        avatar: 'https://avatars2.githubusercontent.com/u/22886057',
        bio: '但行好事，莫问前程'
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
            <TopBar />
            <Route path='/' exact component={Home} />
            <Route path='/community' component={Community} />
            <Route path='/mine' exact component={Mine} />
            <Route path='/mine/course' component={MineCourse} />
          </Layout>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
