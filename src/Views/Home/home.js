import React, { Component } from "react";
import axios from "axios";
import Tuijian from './Tuijian/tuijian'
import Shepin from './Shechipin/shechipin'
import Kuajing from './Kuajing/kuajing'
import Yundong from "./Yundong/yundong";
import Nvzhaung from "./Nvzhaung/nvzhaung";
import Nanzhuag from "./Nanzhuang/nanzhuang";
import Tongzhuang from "./Tongzhuang/tongzhaung";
import Xiexue from'./Xiebao/xiebao'
import Tabbar from '@/Components/Tabbar/Tabbar'

import { Tabs } from "antd";
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

export default class Home extends Component {
  state = {
    dataList: null,
    navindex:"1"
  };
  componentWillMount() {
    sessionStorage.getItem("indexdata")? this.setState({
        dataList: JSON.parse(sessionStorage.getItem("indexdata"))
      }):axios.post(
        "https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        '{"os":"wap","opt":1,"cmd":1,"id":"7412"}'
      )
      .then(res => {
        sessionStorage.setItem('indexdata',JSON.stringify(res.data.data))
        this.setState({
          dataList: res.data.data
        });
      })
      
      console.log(sessionStorage.getItem('navindex'))
      sessionStorage.getItem('navindex') && this.setState({
        navindex: sessionStorage.getItem('navindex')
      })
  }
  render() {
    return (
      <div id='home'>
        <header style={{ height: "50px", background: "red" }}>
          12345uytre
        </header>
          <Tabs defaultActiveKey={this.state.navindex} onChange={callback}>
            <TabPane tab="推荐" key="1">
              <Tuijian detail={this.state.dataList}></Tuijian>
            </TabPane>
            <TabPane tab="奢品" key="2">
              <Shepin></Shepin>
            </TabPane>
            <TabPane tab="跨境" key="3">
              <Kuajing></Kuajing>
            </TabPane>
            <TabPane tab="运动" key="4">
              <Yundong></Yundong>
            </TabPane>
            <TabPane tab="女装" key="5">
              <Nvzhaung></Nvzhaung>
            </TabPane>
            <TabPane tab="男装" key="6">
              <Nanzhuag></Nanzhuag>
            </TabPane>
            <TabPane tab="鞋包" key="7">
              <Xiexue></Xiexue>
            </TabPane>
            <TabPane tab="童装" key="8">
              <Tongzhuang></Tongzhuang>
            </TabPane>
          </Tabs>
        <Tabbar></Tabbar>
      </div>
    );
    function callback(key) {
      sessionStorage.setItem('navindex',key)
    }
  }
}
