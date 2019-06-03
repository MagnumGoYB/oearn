import React, { Component } from 'react'

import TopBar from '../layout/TopBar'

import { Layout } from 'antd'

const { Content } = Layout

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Content className="content">
          <div className="container">
            <div style={{ background: '#fff', padding: 24, minHeight: 880 }}>Home</div>
          </div>
        </Content>
      </React.Fragment>
    )
  }
}

export default Home