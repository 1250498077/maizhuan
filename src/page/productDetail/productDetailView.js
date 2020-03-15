import React from 'react';
import { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './productDetailScss.scss';
import clothes1 from '../../common/imgs/clothes1.jpg';
class productDetailView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: ['1', '2', '3'],
      titlelist: [{
        id: 1,
        name: '影响数码'
      }, {
        id: 2,
        name: '衣服大概'
      }],
      imgHeight: 176,
    }
  }

  componentDidMount() {
    let product = [];
    const dd = new Array(25).fill('')
    dd.map((item, index) => {
      product.push({
        id: index,
        name: '衣服大概'
      })
    })
    this.setState({
      titlelist: product
    });
  }

  //准备：即将被重新渲染，状态未变化
  componentWillUpdate(nextProps, nextState) {}
  //完成：正在被重新渲染，状态已变化
  componentDidUpdate(prevProps, prevState) {}
  // 已加载组件，收到新属性时调用
  componentWillReceiveProps(nextProps) {}

  render() {
    const {titlelist} = this.state;
    return (
      <div className="product-detail">

        <div className="product-img">
          <img src={clothes1} className="product-header-img"/>
        </div>

        <div className="product-detail-footer-action">
          <div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default productDetailView;
