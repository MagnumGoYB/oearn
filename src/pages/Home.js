import React, { Component } from 'react'

import { Layout } from 'antd'

const { Content } = Layout

export class Home extends Component {
  render() {
    return (
      <Content className="content">
        <div className="container">
          <div style={{ background: '#fff', padding: 24, minHeight: 880 }}>Home</div>
        </div>
      </Content>
    )
  }
}

export default Home