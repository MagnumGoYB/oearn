import React from 'react'

import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import UpperUser from '../components/UpperUser'

import { Row, Col, Input } from 'antd'

const Search = Input.Search

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="upper">
          <Row>
            <Col span={4}>
              <Logo />
            </Col>
            <Col span={20}>
              <Row 
                type="flex" 
                justify="end" 
                align="middle" 
                gutter={16} 
                style={{ height: 120 }}
              >
                <Col>
                  <Search
                    placeholder="请输入搜索内容..."
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginRight: 40 }}
                  />
                </Col>
                <Col>
                  <UpperUser name="鲁Da师" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Navbar />
      </div>
    )
  }
}

export default Header