import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: props.activeIndex
    }
  }
  render() {
    return (
      <Layout.Header>
        <Menu
          theme='dark'
          mode='horizontal'
          className='navbar'
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Link to='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/community'>社区教育</Link>
          </Menu.Item>
          <Menu.Item key="3">农村教育</Menu.Item>
          <Menu.Item key="4">职工教育</Menu.Item>
          <Menu.Item key="5">教师培训</Menu.Item>
          <Menu.Item key="6">资源共享</Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}

export default Navbar