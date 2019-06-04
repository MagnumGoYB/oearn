import React, { Component } from 'react'

import TopBar from '../layout/TopBar'
import MyBlock from '../components/MyBlock'

import { Layout, Menu, Icon } from 'antd'

import './My.css'

const { Content, Sider } = Layout

export class My extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Content>
          <MyBlock />
          <div className="container">
            <Layout className="my-layout">
              <Sider className="my-sider" width={180}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  style={{ height: '100%' }}
                >
                  <Menu.Item key="1">
                    <Icon type="compass" />
                    <span>最新动态</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="book" />
                    <span>我的课程</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="edit" />
                    <span>我的笔记</span>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Icon type="question" />
                    <span>我的提问</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
          </div>
        </Content>
      </React.Fragment>
    )
  }
}

export default My