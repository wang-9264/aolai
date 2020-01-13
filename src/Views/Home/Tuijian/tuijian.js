import React, { Component } from "react";
import Swiper from "@/Components/Swiper/swiper";
import Preview from "../Components/Yulan/yulan";
import Floatbanner from '../Components/FloatNav/floatnav'

// import {withRouter} from 'react-router'

class Tuijian extends Component {
  handleClick(id){
    this.props.history.push(`/activity/${id}`)
  }

  render() {
    // console.log(this.props);
    var datalist = this.props.detail;
    return (
      this.props.detail?
      <div id="indextuijian">
        {/* 轮播 */}
        <Swiper mingzi="topnavswiper" configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
        <div className="swiper-wrapper">
          {datalist[4].cons.map(item => (
            <div className="swiper-slide" key={item.src} onClick={()=>{this.handleClick(item.href)}}>
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
                style={{ width: "100%" }}
                />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        </Swiper>

        {/* 活动 */}
        <img
          src={"https://img3.aolaigo.com/group1/" + datalist[5].cons[0].src}
          style={{ width: "100%" }}
        />

        {/* 活动导航 */}
        <Preview mystyle={{ marginTop: "0.05rem" }}>
          {datalist[6].cons.map(item => (
            <li key={item.src} style={{ width: "25%" ,margin:"0"}}>
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
                style={{ width: "0.5rem", margin: "0 auto" }}
              />
              <p style={{ paddingTop: "0.1rem", fontSize: "0.12rem",height:'0.36rem' }}>
                {item.title}
              </p>
            </li>
          ))}
        </Preview>

        {/* 奥莱快讯 */}
        <div style={{ display: "flex", height: "0.33rem" }}>
          <img
            src="https://img5.aolaigo.com/group1/M00/49/FA/CggUF1yxbXeAZ1WWAAAMZ_vv20I491.png"
            style={{ width: "93px", padding: "9px" }}
          />
          <Swiper configure={{direction:'vertical'}} mingzi='aolaikuaixun'>
          <div className="swiper-wrapper" style={{}}>
            {datalist[9].cons.map(item => (
              <div
                className="swiper-slide"
                key={item.title}
                style={{ lineHeight: "33px", fontWeight: "800" }}
              >
                {item.title}
              </div>
            ))}
          </div>
          </Swiper>
        </div>

        {/* 搜索奥莱 */}
        <img
          src={"https://img3.aolaigo.com/group1/" + datalist[10].cons[0].src}
          style={{ width: "100%" }}
        />

        {/* 人气活动 */}
        <h2
          style={{
            fontSize: "0.16rem",
            height: "0.4rem",
            lineHeight: "0.4rem",
            fontWeight: "800",
            textAlign: "center"
          }}
        >
          {datalist[13].cons[0].title}
        </h2>
        <Floatbanner mystyle={{padding:"0 0.1rem"}}>
          {datalist[14].cons.map(item => (
            <li key={item.src}>
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
              />
            </li>
          ))}
          {datalist[15].cons.map(item => (
            <li
              key={item.src}
            >
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
              />
            </li>
          ))}
          </Floatbanner>


        {/* 专柜同款 */}
        <h2
          style={{
            fontSize: "0.16rem",
            height: "0.4rem",
            lineHeight: "0.4rem",
            fontWeight: "800",
            textAlign: "center"
          }}>{datalist[17].cons[0].title}</h2>
          {/* 轮播1 */}
        <Swiper mingzi='zhuanguitongkuan1' configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
        <div className="swiper-wrapper">
          {datalist[18].coms[0].coms[0].cons.map(item => (
            <div className="swiper-slide" key={item.src}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" }} />
            </div>
          ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
        {/* 分类1 */}
        <Preview mystyle={{padding:'0.1rem'}}>
        {datalist[18].coms[0].coms[1].cons.map(item => (
            <li key={item.src} style={{flex:'1',padding:'0'}}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" }} />
        <h3 style={{ fontSize:'0.12rem'}}>{item.title}</h3>
            </li>
          ))}
        </Preview>
        {/* 品牌1 */}
        <Preview mystyle={{padding:'0.1rem'}}>
        {datalist[18].coms[0].coms[2].cons.map(item => (
            <li key={item.src} style={{width:'0.65rem',border:'1px solid #ccc',borderRadius:'5px',padding:'0',margin:'0 0.03rem 0 0.01rem'}}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" }} />
            </li>
          ))}
        </Preview>
        {/* 轮播2 */}
        <Swiper mingzi='zhuanguitongkuan2' configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
        <div className="swiper-wrapper">
          {datalist[18].coms[1].coms[0].cons.map(item => (
            <div className="swiper-slide" key={item.src}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        </Swiper>
        {/* 分类2 */}
        <Preview mystyle={{padding:'0.1rem'}}>
        {datalist[18].coms[1].coms[1].cons.map(item => (
            <li key={item.src} style={{flex:'1',padding:"0"}}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "0.62rem" }} />
        <p style={{fontSize:'0.12rem',width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{item.title}</p>
            </li>
          ))}
        </Preview>
        {/* 品牌2 */}
        <Preview mystyle={{padding:'0.1rem'}}>
        {datalist[18].coms[1].coms[2].cons.map(item => (
            <li key={item.src} style={{width:'0.65rem',margin:'0.03rem',border:'1px solid #ccc',borderRadius:'5px'}}>
              <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" }} />
            </li>
          ))}
        </Preview>


        {/* 尖货推荐 */}
        <h2
          style={{
            fontSize: "0.16rem",
            height: "0.4rem",
            lineHeight: "0.4rem",
            fontWeight: "800",
            textAlign: "center"
          }}>{datalist[19].cons[0].title}</h2>
        {/* 推荐商品预览 */}
        <Preview mystyle={{padding:'0.1rem'}}>
        {datalist[20].cons.map(item => (
            <li key={item.src} style={{ width: '1.12rem' ,borderRadius:'5px',border:'1px solid #ccc'}}>
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
                style={{ width:'100%'}}
              />
              <p style={{ paddingTop: "0.1rem", fontSize: "0.12rem" ,width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',height:'0.24rem',lineHeight:'0.24rem',margin:'0',padding:'0'}}>
                {item.title}
              </p>
              <p style={{height:'0.32rem',lineHeight:'0.32rem',margin:'0',fontSize: "0.16rem"}}>￥{item.sprice}</p>
            </li>
          ))}
        </Preview>
        

        {/* 底部信息栏 */}
        <ul style={{margin:'0 0 0.55rem',padding:'0 0.1rem'}}>
        <p style={{margin:'0',fontSize:'0.12rem',lineHeight:'0.18rem',color:'#999999'}}>{datalist[22].cons[0].title}</p>            
        <p style={{margin:'0',fontSize:'0.12rem',lineHeight:'0.18rem',color:'#999999'}}>{datalist[22].cons[0].subtitle1}</p>            
        <p style={{margin:'0',fontSize:'0.12rem',lineHeight:'0.18rem',color:'#999999'}}>{datalist[22].cons[0].bname}</p>            
        <p style={{margin:'0',fontSize:'0.12rem',lineHeight:'0.18rem',color:'#999999'}}>{datalist[22].cons[0].subtitle2}</p>
        <p style={{margin:'0',fontSize:'0.12rem',lineHeight:'0.18rem',color:'#999999'}}>{datalist[22].cons[0].bgcolor}</p>
        </ul>
      </div>:null
    );
  }
}

export default Tuijian