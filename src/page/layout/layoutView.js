import React from 'react';
import { Component } from 'react';
import router from '../../router/router'
import './layoutScss.scss'
import { Route, Switch, Link } from 'react-router-dom';
import { TabBar, ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
]

class LayoutView extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }


  // 初始状态或状态变化会触发render
  render() {

    return (
      <div className="layout-header">
        <Switch>
          {
            router && router.length ? router.map((item) => {
                return <Route key={item.key} path={item.path}  component={item.component}/> 
            }) : null
          }
          {/* <Route path={'/home'}  component={home}/>  */}
        </Switch>
        <div>

          <div id="menu" className="menu">
              <Link to="/home">
                <div id="one" className="subMenu text-center" data-src="radar.html">
                    <span className="glyphicon glyphicon-edit btn-lg" style={{fontSize: 16}}></span>
                    <div className="menu_name">首页</div>
                </div>
              </Link>
              <Link to="/classify">
                <div id="two" className="subMenu text-center" data-src="cha.html">
                    <span className="glyphicon glyphicon-list btn-lg" style={{fontSize: 16}}></span>
                    <div className="menu_name">分类</div>
                </div>
              </Link>
              <Link to="/shop">
                <div id="three" className="subMenu text-center" data-src="advise.html">
                    <span className="glyphicon glyphicon-comment btn-lg"  style={{fontSize: 16}}></span>
                    <div className="menu_name">购物车</div>
                </div>
              </Link>
              <Link to="/my">
                <div id="four" className="subMenu text-center" data-src="position.html">
                    <span className="glyphicon glyphicon-sort-by-attributes-alt btn-lg"  style={{fontSize: 16}}></span>
                    <div className="menu_name">我的</div>
                </div>
              </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default LayoutView
