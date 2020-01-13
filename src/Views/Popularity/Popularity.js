import React, { Component } from 'react'
import Axios from 'axios'
import './Popularity.css'
import Tabbar from '@/Components/Tabbar/Tabbar'

export default class Popularity extends Component {
    state = {
        datalist: [],
        subtitle2:'',
        isSora:false,
        ico:0
    }
    componentDidMount() {
        Axios.post('https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx', '{"os":"wap","opt":1,"cmd":1,"id":"4015"}')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    datalist: res.data.data[0].cons

                })
                // console.log(this.state)
            })
    }
    render() {

        return  <div>
            <div>
            <li className="leftLi"><span className="iconfont icon-_zuo"></span></li>
                    <li className="head">人气优品</li>
            </div>
            {this.state.datalist.map((item,index) => (
            <div className="index">

                
                <img className="PopularityImg" src={`https://img1.aolaigo.com/group1/${item.src}`} key={item.subtitle2} />

                <div className="PopularityNavRight">
                <h3 className="PopularityH3">{item.title}</h3>
            <span className="PopularitySpan">{item.subtitle1}</span>
                <div className="PopularityLike">
                    <li className="PopularityLike_li1">{item.subtitle2}人喜欢</li>
                    <li className="PopularityLike_li2">
                    <span className={this.state.isSora?'iconfont icon-xinheart118':'iconfont icon-like-line'} onClick={()=>{
                        this.PopularityClick(index)
                    }}></span></li>
                    <li className="PopularityLike_li3">￥{item.sprice}</li>
                </div>
                </div>
            </div>))}
            <Tabbar></Tabbar>
            </div>  
    }
    PopularityClick(qqq){
        var aa=[]
        aa = this.state.datalist.slice()
        this.setState({
            isSora: !this.state.isSora,
        })
        this.state.isSora=!this.state.isSora
        console.log(qqq)
        if(this.state.isSora===true){
        aa[qqq].subtitle2=(parseInt(aa[qqq].subtitle2)+1).toString()
            // this.span.className='iconfont icon-like-line'
            // console.log(this.span.style)
            console.log(1)
        }else{
        aa[qqq].subtitle2=(parseInt(aa[qqq].subtitle2)-1).toString()
        // this.span.className='iconfont icon-xinheart118'
            console.log(222222)
        }
        this.setState({
         datalist:aa
        })
    }
    isShow
}