import React from 'react'

import AppWithContext from '../AppWithContext'

import UpperUser from './UpperUser'

import { Row, Col, Input } from 'antd'

const { Search } = Input

export class TopRightSide extends React.Component {
  render() {
    const { data } = this.props
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
          <UpperUser name={user.name} avatar={user.avatar} />
        </Col>
      </Row>
    )
  }
}

export default AppWithContext(TopRightSide)