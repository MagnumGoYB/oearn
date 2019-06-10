import React, { Component } from 'react'

import { Layout } from 'antd'

const { Content } = Layout

export class Community extends Component {
  render() {
    return (
      <Content className="content">
        <div className="container">
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Community</div>
        </div>
      </Content>
    )
  }
}

export default Community