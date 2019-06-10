import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MyBlock from '../components/MyBlock'

import { Layout, Menu, Icon } from 'antd'

const { Content, Sider } = Layout

export class MineContainer extends Component {
  render() {
    return (
      <Content>
        <MyBlock />
        <div className="container">
          <Layout className="my-layout">
            <Sider className="my-sider" width={160}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1">
                  <Link to="/mine">
                    <Icon type="compass" />
                    <span>最新动态</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/mine/course">
                    <Icon type="book" />
                    <span>我的课程</span>
                  </Link>
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
            <Content style={{ paddingLeft: '40px', minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </div>
      </Content>
    )
  }
}

export default MineContainer