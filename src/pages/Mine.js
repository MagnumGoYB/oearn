import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MineContainer from '../layout/MineContainer'
import MineList from '../components/MineList'

import { Row, Col, Carousel, List, Icon } from 'antd'

export class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [
        {
          id: 0,
          title: '基于TypeScript从零重构axios',
          src: 'http://temp.im/660x180',
          link: '/'
        },
        {
          id: 1,
          title: 'Java电商秒杀系统深度优化 从容应对亿级流量挑战',
          src: 'http://temp.im/660x180',
          link: '/'
        },
        {
          id: 2,
          title: 'OCR 识别与慧眼核身接入指南',
          src: 'http://temp.im/660x180',
          link: '/'
        }
      ],
      articles: [
        {
          id: 0,
          thumbnail: 'https://img1.mukewang.com/5bf39fbf00014af202720272-200-200.jpg',
          title: '使用Kubespray 2.8.3部署生产可用的Kubernetes集',
          description: 'Kubernetes的安装部署是难中之难，每个版本安装方式都略有区别。笔者一直想找一种支持多平台、相对简单 、适用于生产环境 的部署方案。经过一段时间的调研，有如下几种解决方案进入笔者视野：部署方案优点缺点Kubeadm官方出品部署较麻烦、不够透明Kubespray官方出品、部署较简单、懂Ansible就能上手不够透明RKE部署较简单、需要花一些时间了解RKE的cluster.yml配置文件不够透...'
        },
        {
          id: 1,
          thumbnail: 'https://img3.mukewang.com/5cfb6c910001db2606840457-200-200.jpg',
          title: '谷歌“反悔”断供华为：被曝正在游说，寻求禁令豁免',
          description: '得道多助。事情又有新变化。6月8日最新消息，Google官方正在努力延期或完全豁免华为。英国《金融时报》援引消息人士称，称Google正在游说特朗普政府对华为的出口禁止令，争取进一步延迟实施，甚至完全...'
        },
        {
          id: 2,
          thumbnail: 'https://img3.mukewang.com/5cfa79aa0001a77c01960196-200-200.jpg',
          title: '女神背心变内衣，只需草图画几笔 | 中山+字节跳动等新研究',
          description: '寥寥勾画几笔，就能让女神的衣服变个样。随手画个内衣的轮廓，穿粉色运动背心的妹子，一下子就换上了内衣。就像下面这样：生成效果毫不违和，没有任何P过的痕迹，更想象不出它竟然是根据草图...'
        }
      ]
    }
  }
  render() {
    const { topics, articles } = this.state
    return (
      <MineContainer>
        <Row
          type="flex"
          justify="space-between"
          align="top"
        >
          <Col span={15}>
            <div className="my-content">
              {topics.length !== 0 &&
                <Carousel
                  className="mine-carousel"
                  autoplaySpeed={8000}
                  autoplay
                >
                  {
                    topics.map(item => (
                      <div className="mine-carousel-item" key={item.id}>
                        <h2 className="title">{item.title}</h2>
                      </div>
                    ))
                  }
                </Carousel>
              }
              <MineList />
            </div>
          </Col>
          <Col span={9}>
            <div className="my-content-sider">
              <div className="my-content-sider-grid-title">
                <h3>热门文章</h3>
                <div className="more">
                  <Link to="/">更多<Icon type="more" /></Link>
                </div>
              </div>
              <List
                className="hot-articles"
                itemLayout="horizontal"
                dataSource={articles}
                renderItem={item => (
                  <List.Item className="hot-articles-item">
                    <List.Item.Meta
                      avatar={<img className="hot-articles-pic" src={item.thumbnail} alt={item.title} />}
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </MineContainer>
    )
  }
}

export default Mine