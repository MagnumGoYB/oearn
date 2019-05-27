import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Icon, Avatar, Badge, Menu, Dropdown } from 'antd';

const menu = (
  <Menu className="upper-user-dropdown-menu">
    <Menu.Item>
      <Link to="/">
        <Icon type="user" />个人中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <Icon type="account-book" />我的订单
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/">
        <Icon type="poweroff" />注销
      </Link>
    </Menu.Item>
  </Menu>
)

export class UpperUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }
  render() {
    const { name } = this.state
    return (
      <div className="upper-user">
        <Row 
          type="flex" 
          justify="end" 
          align="middle" 
        >
          <Col>
            <Badge count={2} overflowCount={99} dot>
              <Icon type="bell" theme="twoTone" style={{ fontSize: 20, cursor: 'pointer' }} />
            </Badge>
          </Col>
          <Col>
            <Dropdown 
              overlay={ menu } 
              trigger={['click']}
              placement="bottomRight"
            >
              <div className="upper-user-avatar">
                <Avatar 
                  size="small"
                  shape="square"
                  icon="user"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style={{
                    backgroundColor: '#fff',
                    color: '#ccc',
                    marginLeft: 20,
                    marginRight: 8
                  }}
                />
                <span style={{ fontSize: 12 }}>
                  { name }
                  <Icon type="caret-down" style={{ marginLeft: 3 }} />
                </span>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UpperUser