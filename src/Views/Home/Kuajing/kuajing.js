import React, { Component } from 'react'
import Swiper from "@/Components/Swiper/swiper";
import axios from "axios";
import Preview from '../Components/Yulan/yulan'
import Floatbanner from '../Components/FloatNav/floatnav'
import {withRouter} from 'react-router'

class Kuajing extends Component {
    listClick(id) {
        this.props.history.push(`/list/${id}`)
    }
    detailClick(id){
        this.props.history.push(`/detail/${id}`)
    }
    state = {
        datalist: []
      };
      componentWillMount() {
        sessionStorage.getItem("homekuajing")
          ? this.setState({
              datalist: JSON.parse(sessionStorage.getItem("homekuajing"))
            })
          : axios
              .post(
                "https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
                '{"os":"wap","opt":1,"cmd":1,"id":"7299"}'
              )
              .then(res => {
                sessionStorage.setItem("homekuajing", JSON.stringify(res.data.data));
                this.setState({
                  datalist: res.data.data
                });
              });
      }
    render() {
        return (
            this.state.datalist.length?
            <div style={{marginBottom:"0.7rem",width:"3.75rem"}}>
            {/* 轮播图 */}
            <Swiper mingzi="kuajingtop" configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
            <div className="swiper-wrapper">
                {this.state.datalist[0].cons.map(item=>
                    <div className="swiper-slide" key={item.href} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                        <img src={"https://img4.aolaigo.com/group1/"+item.src}
                            style={{ width: "100%" }} />
                    </div>
                    )}
            </div>
            <div className="swiper-pagination"></div>
            </Swiper>


            {/* 分类 */}
            <Preview>
                {this.state.datalist[1].cons.map(item=>
                    <li style={{width:'20%',padding:"0.18rem 0 0.15rem",margin:'0'}} key={item.title} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                        <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{margin:"0 auto",width:"0.55rem"}}/>
                        <p style={{height:'0.32rem',lineHeight:'0.32rem',fontSize:'0.14rem'}}>{item.title}</p>
                    </li>
                    )}
            </Preview>

            <ul style={{padding:"0 0.1rem",background:'#f3f3f3'}}>
            {/* banner */}
            <Floatbanner mystyle={{padding:"0",margin:"0"}}>
                {this.state.datalist[2].cons.map(item => (
                    <li key={item.src} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                    <img
                        src={"https://img3.aolaigo.com/group1/" + item.src}
                    />
                    </li>
                ))}
                {this.state.datalist[3].cons.map(item => (
                    <li
                    key={item.src}
                    onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}
                    >
                    <img
                        src={"https://img3.aolaigo.com/group1/" + item.src}
                        style={{width:"100%"}}
                    />
                    </li>
                ))}
            </Floatbanner>


            {/* 每周精选 */}
            <h2
            style={{
                fontSize: "0.16rem",
                height: "0.4rem",
                lineHeight: "0.4rem",
                fontWeight: "800",
                textAlign:'center',
                background:"#f3f3f3"
            }}
            >
            {this.state.datalist[4].cons[0].title}
            </h2>
            <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:" hidden"}}>
            {this.state.datalist[5].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>{item.sprice}</p>
                </li>
                )}
            </Preview>


            {/* 全球大牌 */}
            <h2
            style={{
                fontSize: "0.16rem",
                height: "0.4rem",
                lineHeight: "0.4rem",
                fontWeight: "800",
                textAlign:'center',
                background:"#f3f3f3"
            }}
            >
            {this.state.datalist[6].cons[0].title}
            </h2>
            <Floatbanner mystyle={{padding:"0",margin:"0"}}>
                {this.state.datalist[7].cons.map(item => (
                    <li key={item.src} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                    <img
                        src={"https://img3.aolaigo.com/group1/" + item.src}
                    />
                    </li>
                ))}
            </Floatbanner>


            {/* 竞选活动 */}
            <h2
            style={{
                fontSize: "0.16rem",
                height: "0.4rem",
                lineHeight: "0.4rem",
                fontWeight: "800",
                textAlign:'center',
                background:"#f3f3f3"
            }}>
                {this.state.datalist[8].cons[0].title}
            </h2>
            {/* 第一部分 */}
            <Preview>
            {this.state.datalist[9].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{width:'100%',borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
            </Preview>
            <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[9].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
                <div onClick={()=>this.listClick(this.state.datalist[9].coms[0].cons[0].href.replace(/.*list.html\?/,''))}> 点击查看更多</div>
            </Preview>
             {/* 第二部分 */}
             <Preview>
            {this.state.datalist[10].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{width:'100%',borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
            </Preview>
            <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[10].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
                <div onClick={()=>this.listClick(this.state.datalist[10].coms[0].cons[0].href.replace(/.*list.html\?/,''))}> 点击查看更多</div>
            </Preview>
             {/* 第三部分 */}
             <Preview>
            {this.state.datalist[11].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{width:'100%',borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
            </Preview>
            <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[11].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
                <div onClick={()=>this.listClick(this.state.datalist[11].coms[0].cons[0].href.replace(/.*list.html\?/,''))}> 点击查看更多</div>
            </Preview>


            {/* 底部轮播 */}
            <Swiper mingzi="kuajingbottom" configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
            <div className="swiper-wrapper">
                {this.state.datalist[12].cons.map(item=>
                    <div className="swiper-slide" key={item.href} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}>
                        <img src={"https://img4.aolaigo.com/group1/"+item.src}
                            style={{ width: "100%" }} />
                    </div>
                    )}
            </div>
            <div className="swiper-pagination"></div>
            </Swiper>


            {/* 爆款推荐 */}
            <h2
          style={{
            fontSize: "0.16rem",
            height: "0.4rem",
            lineHeight: "0.4rem",
            fontWeight: "800",
            textAlign:'center',
            background:"#f3f3f3"
          }}
        >
          {this.state.datalist[13].cons[0].title}
        </h2>
        <Preview>
        {this.state.datalist[14].cons.map(item => (
            <li key={item.src} style={{ width: '1.12rem' ,borderRadius:'0.05rem',border:'1px solid #ccc'}} onClick={()=>this.detailClick(item.skuid)}>
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
                style={{ width:'100%'}}
              />
              <h4 >
                {item.title}
              </h4>
              <p style={{height:'0.32rem',lineHeight:'0.32rem',margin:'0',fontSize: "0.16rem"}}>￥{item.sprice}</p>
            </li>
          ))}
        </Preview>

            </ul>
            </div>:''
        )
    }
}

export default withRouter(Kuajing)