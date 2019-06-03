import React, { Component } from 'react'

import { Layout } from 'antd'

import TopBar from '../layout/TopBar'

const { Content } = Layout

export class Community extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Content className="content">
          <div className="container">
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Community</div>
          </div>
        </Content>
      </React.Fragment>
    )
  }
}

export default Community