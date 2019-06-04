import React from 'react'
import { Link } from 'react-router-dom'

import AppWithContext from '../AppWithContext'

import UpperUser from './UpperUser'

import { Row, Col, Input, Icon, Divider } from 'antd'

const { Search } = Input

export class TopRightSide extends React.Component {
  render() {
    const { data } = this.props
    const { logged } = data
    const { user } = data
    return (
      <Row 
        type="flex" 
        justify="end" 
        align="middle"
        className="top-right-side"
        gutter={16} 
      >
        <Col>
          <Search
            placeholder="请输入搜索内容..."
            onSearch={value => console.log(value)}
            className="top-search"
          />
        </Col>
        <Col>
          { logged && <UpperUser name={user.name} avatar={user.avatar} notices={user.notices} /> }
          { !logged && 
            <div className="top-not-logged">
              <Link to="/"><Icon type="user" />登录</Link>
              <Divider type="vertical" />
              <Link to="/">注册</Link>
            </div>
          }
        </Col>
      </Row>
    )
  }
}

export default AppWithContext(TopRightSide)