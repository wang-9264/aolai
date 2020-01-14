import React,{Component} from 'react'
// import { connect } from 'react-redux';
import MySwiper from './DetailSwiper/detailswiper'
import Ajax from '../../Components/ajax'
import {withRouter} from 'react-router'
import Jsonp from "jsonp"
// import {sendList} from '../../Redux/Actions/liebiao'
import './detail.scss' 

class Detail extends Component {
    state={
        detailinfo:null
        // detailinfoDown:null
    }
    render () {
        return this.state.detailinfo?<div className="wang-detail">
            <div className="nav-bar">
                <div className="iconfont icon-_zuo
" onClick={this.handleClick.bind(this)}></div>
            </div>
            {
                <MySwiper mingzi="wang">
                <div className="swiper-wrapper">
                    {   this.state.detailinfo.imgUrls.map((item,index)=>
                        <div className="swiper-slide" key={index}>{
                            <img src={"https://img4.aolaigo.com/group1/"+item.replace(/http.*group1/,'')}
                            style={{width:'100%'}}/>
                            }</div>
                        )
                    }
                </div>
                <div className="swiper-pagination"></div>
                </MySwiper>
            }
            <div className='info-panel'>
            <div className="info-title">
                <span>自营</span>{this.state.detailinfo.name}
            </div>
            <div className="info-price">
                <span className="price-s">￥{this.state.detailinfo.p_sale_price}.00</span>
                <span className="price-m">￥{this.state.detailinfo.p_in_scj}.00</span>
            </div>
            <div className="select-sku">
                <div className="sel-yanse">颜色：{this.state.detailinfo.sku.map(item=>item.Color )}</div>
                <div className="sel-chima">尺码：{this.state.detailinfo.sku.map(item=>item.Size )}</div>
            </div>
        <div className="info-delivery">发货地：{this.state.detailinfo.faHuoAddr}</div>
        <div className="info-slogan">
            <div className="slogan1">海外直采</div>
            <div className="slogan2">海关检查</div>
            <div className="slogan3">正品无忧</div>
        </div>
        <div className="info-brand">
            <img className="brand-img" src={this.state.detailinfo.brandLogo}/>
        <div className="brand-text">{this.state.detailinfo.brand}</div>
        </div>
            </div>
            <div className="tool-bar">
                <div className="tool-menu-service">
                    <div className="server-icon icon-kefu2"></div>
                    <div className="service-text">客服</div>
                </div>
                <div className="tool-menu-collect">
                    <div className="collect-icon icon-xing1"></div>
                    <div className="collect-text">收藏</div>
                </div>
                <div className="tool-menu-cart">
                <div className="cart-icon icon-gouwuche"></div>
                    <div className="cart-text">购物车</div>
                </div>
                <div className="tool-menu-buynow">
                    <div className="buynow-text">立即购买</div>
                </div>
                <div className="tool-menu-buy">
                    <div className="buy-text">加入购物车</div>
                </div>
            </div>
        </div>:null
    }


    componentWillMount(){
        let that=this
        Ajax({
            type:'GET',
            url:`https://productapi.aolaigo.com/handler/command.ashx?cmd=getsku&v=2&skuId=${this.props.match.params.detailid}&app_version=4.2.00&_=1578808866002`,
            success(res){
                // console.log(444,(JSON.parse(res)).Data,5555555)
                that.setState({
                    detailinfo:JSON.parse(res).Data
                })
                // console.log(that.state.detailinfo,66666)
                
            }
        })

        // Jsonp(`https://productapi.aolaigo.com/handler/command.ashx?cmd=getsku&v=2&skuId=${this.props.match.params.detailid}&app_version=4.2.00&_=1578808866002`,{},function(err,data){
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log(data,11111111111111)
        //     }
        // })
        // Ajax({
        //     type:'GET',
        //     url:`https://searchapi.aolaigo.com/appsearch/cmd/GetAppSearchResult?cmd=GetAppSearchResult&callback=jQuery22408381793463533487_1578814301384&pid=210207041024_210207030150_210207046002_210207037043_210207030097_210207019057_210207030151_210207052004_210207046001_210207045043_210207047004_210207044026_210207030133_210207052003_210207045042_210207046005_210207044022_210207030139_210207030137_210204005005_210207046006_210207037009_210107021019_210207037052_210207030135_210207030025_210207037041_210207037053_210207052005_210207047007&_=1578814301387`,
        //     success(res){
        //         console.log(res,5555555)
        //         this.setState({
        //             detailinfoDown:JSON.parse(res)
        //         })
        //         console.log(this.detailinfo,66666)
        //     }
        // })
    }
    handleClick(){
        // console.log(this.props.history,77777)
        this.props.history.goBack()
    }
    
}


    

// const mapStateToProps = (state)=>({
//     datalist:state.liebiaoReducer
// })

export default withRouter(Detail)

