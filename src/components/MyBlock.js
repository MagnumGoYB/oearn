import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppWithContext from '../AppWithContext'

import { Avatar, Row, Col, Button } from 'antd'

import './MyBlock.css'

export class MyBlock extends Component {
  render() {
    const { data } = this.props
    const { user } = data
    return (
      <div className="my-block">
        <div className="container">
          <div className="my-block-info">
            <div className="avatar">
              <Avatar
                size={128}
                icon="user"
                src={user.avatar}
                style={{
                  backgroundColor: '#fff',
                  color: '#ccc'
                }}
              />
            </div>
            <div className="profile">
              <div className="name">{user.name}</div>
              <div className="bio">{(user.bio || '这家伙很懒什么都没留下...')}</div>
            </div>
            <Row 
              className="study-count"
              type="flex" 
              justify="end" 
              align="middle"
              gutter={32} 
            >
              <Col className="study-count-item">
                <span className="number">253h</span>
                <span className="title">学习时长</span>
              </Col>
              <Col className="study-count-item">
                <span className="number">26</span>
                <span className="title">积分</span>
              </Col>
              <Col className="study-count-item">
                <span className="number">101</span>
                <span className="title">关注</span>
              </Col>
              <Col className="study-count-item">
                <span className="number">6</span>
                <span className="title">粉丝</span>
              </Col>
              <Col>
                <Link to="/">
                  <Button shape="round" icon="setting" className="setting-btn" ghost>个人设置</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default AppWithContext(MyBlock)