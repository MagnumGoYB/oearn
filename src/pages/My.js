import React, { Component } from 'react'

import TopBar from '../layout/TopBar'
import MyBlock from '../components/MyBlock'

import { Layout } from 'antd'

const { Content } = Layout

export class My extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Content>
          <MyBlock />
          <div className="container">
            <div style={{ background: '#fff', padding: 24, minHeight: 880 }}>My</div>
          </div>
        </Content>
      </React.Fragment>
    )
  }
}

export default My