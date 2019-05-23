import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { Layout } from 'antd'

import Header from './layout/Header'

import Home from './pages/Home'
import Community from './pages/Community'

const { Content } = Layout

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header />
          <Content className="content">
            <Route path='/' exact component={Home} />
            <Route path='/community' component={Community} />
          </Content>
        </Layout>
      </Router>
    )
  }
}

export default App
