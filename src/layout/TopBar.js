import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'
import TopRightSide from '../components/TopRightSide'

import { Layout, Menu } from 'antd'

const { Header } = Layout

export class TopBar extends React.Component {
  render() {
    return (
      <Header className="topbar">
        <div className="container">
          <Logo />
          <TopRightSide />
          <Menu
            theme="dark"
            mode="horizontal"
            className="navbar"
            selectable={false}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/community">社区教育</Link>
            </Menu.Item>
            <Menu.Item key="3">农村教育</Menu.Item>
            <Menu.Item key="4">职工教育</Menu.Item>
            <Menu.Item key="5">教师培训</Menu.Item>
            <Menu.Item key="6">资源共享</Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}

export default TopBar