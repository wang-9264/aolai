import React, { Component } from "react";
import Swiper from "@/Components/Swiper/swiper";
import axios from "axios";
import Preview from '../Components/Yulan/yulan'
import Floatbanner from '../Components/FloatNav/floatnav'
import "./shechipin.css"
import {withRouter} from 'react-router'

class Shechipin extends Component {
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
    sessionStorage.getItem("homeshepin")
      ? this.setState({
          datalist: JSON.parse(sessionStorage.getItem("homeshepin"))
        })
      : axios
          .post(
            "https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
            '{"os":"wap","opt":1,"cmd":1,"id":"7351"}'
          )
          .then(res => {
            sessionStorage.setItem("homeshepin", JSON.stringify(res.data.data));
            this.setState({
              datalist: res.data.data
            });
          });
  }
  render() {
    return (
      this.state.datalist.length?
      <div id="shepin" style={{marginBottom:"0.7rem",width:"3.75rem"}}>
          {/* 轮播图 */}
        <Swiper mingzi="shepintop" configure={{pagination: {el: '.swiper-pagination',clickable: true,}}}>
          <div className="swiper-wrapper" style={{zIndex:"300",width:"3.75rem"}}>
              {this.state.datalist[0].cons.map(item=>
                <div className="swiper-slide" key={item.href} >
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
                <li style={{width:'25%',padding:"0.18rem 0 0.15rem",margin:'0'}} key={item.title}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{margin:"0 auto",width:"0.55rem"}}/>
            <       p style={{height:'0.32rem',lineHeight:'0.32rem',fontSize:'0.14rem'}}>{item.title}</p>
                </li>
                )}
        </Preview>


        {/* 每周特惠 */}
        <ul style={{margin:"0",padding:'0 0.1rem',background:'#f3f3f3'}}>
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
          {this.state.datalist[2].cons[0].title}
        </h2>
        {/* <Swiper mingzi="SPmeizhoutuijian" configure={{autoplay:false,loop:false,slidesPerView:3,loopedSlides:5,spaceBetween: 100,freeMode: true,}}>
            <div className='swiper-wrapper' style={{background:'white'}}>
                {this.state.datalist[3].coms[1].cons.map(item=>
                    // <div className='swriper-slide' key={item.src}>
                        <img className='swriper-slide' key={item.src} src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'30%'}}/>
                    // </div>
                )}
                <div className='swiper-slide'>点击加载更多</div>
                <div className='swiper-slide'>33</div>
                <div className='swiper-slide'>43</div>
                <div className='swiper-slide'>53</div>
                <div className='swiper-slide'>63</div> 
                <div className='swiper-slide'>13</div>
                <div className='swiper-slide'>23</div>
                <div className='swiper-slide'>33</div>
                <div className='swiper-slide'>43</div>
                <div className='swiper-slide'>53</div>
                <div className='swiper-slide'>111</div>

            </div>
        </Swiper> */}
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll"}}>
            {this.state.datalist[3].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} >
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>{item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>


        {/* 特别推荐 */}
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
        <Floatbanner>
          {this.state.datalist[5].cons.map(item => (
            <li key={item.src} >
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
              />
            </li>
          ))}
          {this.state.datalist[6].cons.map(item => (
            <li
              key={item.src}
            >
              <img
                src={"https://img3.aolaigo.com/group1/" + item.src}
              />
            </li>
          ))}
        </Floatbanner>


        {/* 大牌推荐 */}
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
          {this.state.datalist[7].cons[0].title}
        </h2>
        {/* 轮播 */}
        <Swiper mingzi="SPdapaituijian" configure={{slidesPerView: 2,spaceBetween: 0,centeredSlides: true,}}>
            <div className='swiper-wrapper' style={{height:'3.70rem',padding:"0.50rem 0 1.4rem"}} >
                {this.state.datalist[8].cons.map(item=>
                    <div className="swiper-slide" key={item.src} style={{position:"relative"}}>
                        <img src={"https://img3.aolaigo.com/group1/"+item.src} style={{width:"100%"}}/>
                        <div style={{position:"absolute",bottom:"-0.6rem",color:"#ffa800",textAlign:"center",width:"100%"}}>
                        <h4 style={{fontSize:'0.16rem',height:'0.3rem',lineHeight:"0.3rem",color:"#ffa800",margin:"0"}}>{item.title}</h4>
                        <p style={{fontSize:"0.12rem" ,height:'0.15rem'}}>{item.subtitle1}</p>
                        </div>
                    </div>
                )}
                {/* <div className="swiper-slide">1122</div>
                <div className="swiper-slide">1122</div>
                <div className="swiper-slide">1122</div>
                <div className="swiper-slide">1122</div> */}
            </div>
        </Swiper>


        {/* 品鉴奢华 */}
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
          {this.state.datalist[9].cons[0].title}
        </h2>
        {/* 第一部分 衬衫 */}
        <Preview>
            {this.state.datalist[10].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.listClick(item.href2.replace(/.*list.html\?/,''))}>
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
            <div> 点击查看更多</div>
        </Preview>
        {/* 第二部分 */}
        <Preview>
            {this.state.datalist[11].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} />
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
            <div> 点击查看更多</div>
        </Preview>
        {/* 第三部分 */}
        <Preview>
            {this.state.datalist[12].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[12].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>
        {/* 第四部分 */}
        <Preview>
            {this.state.datalist[13].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[13].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>
        {/* 第五部分 */}
        <Preview>
            {this.state.datalist[14].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}}>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} />
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[14].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>
        {/* 品牌第一部分 */}
        <Preview>
            {this.state.datalist[15].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}}>
                  <div style={{padding:'0.1rem',background:"white"}}>
                    <h3 style={{textAlign:"center",lineHeight:"0.26rem",margin:'0'}}>{item.title}</h3>
                    <p style={{textAlign:"center",lineHeight:"0.2rem"}}>{item.subtitle1}</p>
                  </div>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}/>
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[15].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}} onClick={()=>this.detailClick(item.skuid)}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>
        {/* 品牌第二部分 */}
        <Preview>
            {this.state.datalist[16].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.detailClick(item.skuid)}>
                  <div style={{padding:'0.1rem',background:"white"}}>
                    <h3 style={{textAlign:"center",lineHeight:"0.26rem",margin:'0'}}>{item.title}</h3>
                    <p style={{textAlign:"center",lineHeight:"0.2rem"}}>{item.subtitle1}</p>
                  </div>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}/>
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[16].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>
           {/* 品牌第三部分 */}
           <Preview>
            {this.state.datalist[17].coms[0].cons.map(item=>
                <li key={item.src} style={{margin:"0"}} onClick={()=>this.detailClick(item.skuid)}>
                  <div style={{padding:'0.1rem',background:"white"}}>
                    <h3 style={{textAlign:"center",lineHeight:"0.26rem",margin:'0'}}>{item.title}</h3>
                    <p style={{textAlign:"center",lineHeight:"0.2rem"}}>{item.subtitle1}</p>
                  </div>
                  <img src={"https://img3.aolaigo.com/group1/" + item.src} style={{ width: "100%" ,borderRadius:'0.1rem 0.1rem 0 0'}} onClick={()=>this.listClick(item.href.replace(/.*list.html\?/,''))}/>
                  <section style={{textAlign:"left",lineHeight:"0.26rem",fontSize:'0.16rem',padding:"0 0.1rem"}}>{item.bname}</section>
                  <section style={{textAlign:"left",lineHeight:"0.l8rem",fontSize:"0.12rem",padding:"0 0.1rem"}}>{item.fontcolor}</section>
                </li>
                )}
        </Preview>
        <Preview mystyle={{flexWrap: 'nowrap',overflowX:"scroll",overflowY:'hidden',margin:'0.1rem 0 0.16rem'}}>
            {this.state.datalist[17].coms[1].cons.map(item=>
                <li key={item.src} style={{width:'1rem',margin:'0 0.05rem 0 0',background:'white'}}>
                    <img src={"https://img4.aolaigo.com/group1/"+item.src} style={{width:'1rem'}}/>
                    <h4>{item.title}</h4>
                    <p>￥ {item.sprice}</p>
                </li>
                )}
            <div> 点击查看更多</div>
        </Preview>


        {/* 猜你喜欢 */}
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
          {this.state.datalist[18].cons[0].title}
        </h2>
        <Preview>
        {this.state.datalist[19].cons.map(item => (
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

export default withRouter(Shechipin)