import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Icon, Avatar, Badge, Menu, Popover, Skeleton, Typography, List } from 'antd'

const { Paragraph } = Typography

export class UpperUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      notices: [
        {
          title: '习近平重要指示催人奋进 张富清事迹彰显奉献精神',
          description: '近日，习近平总书记对张富清同志先进事迹作出重要指示，社会各界反响热烈。人们感动于老英雄淡泊名利、无私奉献的精神，敬佩老党员一辈子深藏功名、坚守初心的境界。',
          unread: true
        },
        {
          title: '特朗普开始访日，安倍施展新一轮“魅力攻势”',
          description: '美国总统唐纳德·特朗普25日下午抵达日本首都东京，开始对日本国事访问，为期4天。特朗普和妻子梅拉尼娅·特朗普当天乘坐专机抵达东京羽田机场，受到日本外务大臣、美国驻日本大使和其他一些官员迎接，随后前往美国驻日本大使官邸，与日本和美国一些商界人士共进晚餐。',
          unread: false
        }
      ]
    }
  }
  onVisibleNotices = (visible) => {
    if (visible) {
      this.setState({
        isLoading: true
      })
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 500)
    }
  }
  render() {
    const { name, avatar } = this.props
    const { isLoading, notices } = this.state
    const filterUnreadNotices = Object.keys(notices)
    .filter(id => notices[id].unread === true)
    .map(id => notices[id])
    const noticeContent = (
      <Skeleton loading={isLoading} active>
        <div className="upper-user-notices-content">
          <List
            itemLayout="horizontal"
            dataSource={notices}
            renderItem={item => (
              <List.Item className="upper-user-notices-item">
                <List.Item.Meta
                  title={
                    <Link to="/" className="title">{item.title}</Link>
                  }
                  description={
                    <Paragraph type="secondary" style={{ marginBottom: 0 }} ellipsis={{ rows: 2 }}>{item.description}</Paragraph>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </Skeleton>
    )
    const menuContent = (
      <Menu>
        <Menu.Item>
          <Link to="/my">
            <Icon type="user" />个人中心
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            <Icon type="account-book" />我的订单
          </Link>
        </Menu.Item>
        <Menu.Divider style={{ margin: '8px 0' }} />
        <Menu.Item>
          <Link to="/" style={{ color: '#ff4d4f' }}>
            <Icon type="poweroff" />注销
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="upper-user">
        <Row
          type="flex"
          justify="end"
          align="middle"
          gutter={16} 
        >
          <Col>
            <Badge count={7} overflowCount={99} style={{ fontSize: 9, height: 12, lineHeight: '12px', minWidth: 10 }}>
              <Icon type="shopping-cart" style={{ fontSize: 21, cursor: 'pointer', verticalAlign: '-5px' }} />
            </Badge>
          </Col>
          <Col>
            <Popover
              overlayClassName="upper-user-notices"
              placement="bottom"
              title={<span className="upper-user-notices-title">消息通知</span>}
              trigger="click"
              onVisibleChange={(visible) => this.onVisibleNotices(visible)}
              content={noticeContent}
            >
              <Badge count={filterUnreadNotices.length} overflowCount={99} dot>
                <Icon type="bell" style={{ fontSize: 20, cursor: 'pointer', verticalAlign: '-4px' }} />
              </Badge>
            </Popover>
          </Col>
          <Col>
            <Popover
              overlayClassName="upper-user-dropdown-menu"
              placement="bottomRight"
              trigger="click"
              content={menuContent}
            >
              <div className="upper-user-avatar">
                <Avatar
                  size="small"
                  shape="square"
                  icon="user"
                  src={avatar}
                  style={{
                    backgroundColor: '#fff',
                    color: '#ccc',
                    marginRight: 6
                  }}
                />
                <span style={{ fontSize: 12 }}>
                  {name}
                  <Icon type="caret-down" style={{ marginLeft: 3 }} />
                </span>
              </div>
            </Popover>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UpperUser