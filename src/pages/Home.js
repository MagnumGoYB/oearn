import React, { Component } from 'react'

import { Layout } from 'antd'

import Header from '../layout/Header'

const { Content } = Layout

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content className="content">
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Home</div>
        </Content>
      </React.Fragment>
    )
  }
}

export default Home