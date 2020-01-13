import React, { Component } from 'react'
import Axios from 'axios'
import './Ismy.css'
import Set from './IsSet/IsSet'
import Tabbar from '@/Components/Tabbar/Tabbar'
import {
    HashRouter ,
    Route,
    Redirect,
    Switch,
    Link,
    withRouter
}from 'react-router-dom'
// import {
//     withRouter
// }from 'react-router'

 class Ismy extends Component {
    state = {
        datalist: [],
        datacost: [],
        dataId:[]
    }
    componentDidMount() {
        Axios.post('https://crmapi.aolaigo.com/command.ashx', '{"opt":"3","cmd":"2","memcode":"hs20165207661","os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9192A2DCE9202B22E8F7AC9898072177AE94B63A377B75DAB9B21AB75FEAA33BE84BE796E7D533DBFD461667C83D0057F8BB93CE8F373470216820F65D1EC2702FDF95B3AA2BCCE3C92E2EA2AE4389355A905E161E4A8B1E2FD4C6EF4D4A1828658802890120D5EDB9824E7C193788063","nick_name":"","imei":"dasd1223423we","time_stamp":1578638637264,"crc":"3a4669fa47a67f30d7f79263cc967992"}')
            .then(res => {
                this.setState({
                    datalist: res.data.data
                })
                console.log(this.state.datalist)

            })
            Axios.post('https://memberapi.aolaigo.com/appmember.ashx','{"opt":7,"cmd":2,"page_index":1,"page_size":10,"os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9192A2DCE9202B22E8F7AC9898072177AE94B63A377B75DAB9B21AB75FEAA33BE84BE796E7D533DBFD461667C83D0057F8BB93CE8F373470216820F65D1EC2702FDF95B3AA2BCCE3C92E2EA2AE4389355A905E161E4A8B1E2FD4C6EF4D4A1828658802890120D5EDB9824E7C193788063","nick_name":"","imei":"dasd1223423we","time_stamp":1578646733555,"crc":"dbc9131ab778ee1ad10bf32ca2b87e8b"}')
            .then(res=>{
                this.setState({
                    datacost:res.data.data.data
                })
                console.log(this.state.datacost)
    
            })
            Axios.post('https://memberapi.aolaigo.com/appmember.ashx','{"opt":3,"cmd":1,"os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9192A2DCE9202B22E8F7AC9898072177AE94B63A377B75DAB9B21AB75FEAA33BE84BE796E7D533DBFD461667C83D0057F8BB93CE8F373470216820F65D1EC2702FDF95B3AA2BCCE3C92E2EA2AE4389355A905E161E4A8B1E2FD4C6EF4D4A1828658802890120D5EDB9824E7C193788063","nick_name":"","imei":"dasd1223423we","time_stamp":1578885325353,"crc":"bd033eedc34ee59cf9daaae9338c8831"}')
            .then(res=>{
                console.log(res.data)

                this.setState({
                    dataId:res.data.data
                })
                console.log(this.state.dataId)
    
            })
    }
    render() {
        return (
            <div className="ismy_index">
                <h3 className="ismy_h3">
                    <li className="ismy_set">
                        <span className="iconfont icon-set" onClick={this.goSet}></span></li>
                    <li>我的奥莱购</li>
                </h3>
                <div className="ismy_nav">
                    <li className="ismy_nav_top">
                        <div className="ismy_nav_top_l" onClick={this.huiyuanma}><span className="iconfont icon-erweima"></span>会员码</div>
                        <div className="ismy_nav_top_c" onClick={this.huashenghuiyuan}>
                            <div className="iconfont_guodu">
                                <span class="iconfont icon-wode">
                                </span>
                            </div>
                            <span className="ismy_id">
                                {this.state.dataId.tel_no}
                            </span>
                        </div>
                        <div className="ismy_nav_top_r" onClick={this.management}><span className="iconfont icon-yuandianda"></span>花生会员</div>
                    </li>
                    <li className="ismy_nav_btn">
                        <div className="iconfont_nav ismy_nav_btn_1">
                            <div>
                                {this.state.datalist.growth}
                            </div>
                            <div className="ismy_nav_icon"><span class="iconfont icon-zhuzhuangtu"></span>成长值</div>
                        </div>
                        <div className="iconfont_nav ismy_nav_btn_2">
                            <div>
                                {this.state.datalist.growth_start}
                            </div>
                            <div className="ismy_nav_icon">
                                <span class="iconfont icon-qian"></span> 预估奖励
                            </div>
                        </div>
                        <div className="iconfont_nav ismy_nav_btn_3">
                            <div>
                                {this.state.datalist.credits}
                            </div>
                            <div className="ismy_nav_icon">
                                <span class="iconfont icon-huasheng"></span>花生
                            </div>
                        </div>
                    </li>
                </div>
                <div className="ismy_gongneng">
                    <li className="ismy_gongneng_li">
                        <div><span class="ismy_gongneng_li_icon iconfont icon-qianbao-"></span></div>
                        <div>待付款</div>
                    </li>
                    <li className="ismy_gongneng_li">
                        <div><span class="ismy_gongneng_li_icon iconfont icon-daifahuo"></span></div>
                        <div>待发货</div>
                    </li>
                    <li className="ismy_gongneng_li">
                        <div><span class="ismy_gongneng_li_icon iconfont icon-shouhuo"></span></div>
                        <div>待收货</div>
                    </li>
                    <li className="ismy_gongneng_li">
                        <div><span class="ismy_gongneng_li_icon iconfont icon-tuihuanhuo"></span></div>
                        <div>退换货</div>
                    </li>
                    <li className="ismy_danduyangshi ismy_gongneng_li">
                        <div><span class=" ismy_gongneng_li_icon iconfont icon-dingdan"></span></div>
                        <div>全部订单</div>
                    </li>
                </div>
                <div className="ismy_youhuiquan">
                    <li className="ismy_youhuiquan_li">
                        <div><span class="ismy_youhuiquan_icon iconfont icon-liwu"></span></div>
                        <div>优惠券</div>
                    </li>
                    <li className="ismy_youhuiquan_li">
                        <div><span class="ismy_youhuiquan_icon iconfont icon-hongbao"></span></div>
                        <div>红包</div>
                    </li>
                    <li className="ismy_youhuiquan_li">
                        <div><span class="ismy_youhuiquan_icon iconfont icon-zuji"></span></div>
                        <div>足迹</div>
                    </li>
                    <li className="ismy_youhuiquan_li">
                        <div><span class="ismy_youhuiquan_icon iconfont icon-kefu2"></span></div>
                        <div>客服与反馈</div>
                    </li>
                    <li className="ismy_youhuiquan_li">
                        <div><span class="ismy_youhuiquan_icon iconfont icon-xing1"></span></div>
                        <div>收藏</div>
                    </li>
                </div>
                <div className="ismy_fenge">
                    <span className="ismy_span"></span>
                    <div className="ismy_fenge_icon">
                        <span className="iconfont icon-shang"></span>
                        为你推荐</div>
                    
                </div>
                <div className="ismy_recommend">
                    {this.state.datacost.map((item,index)=>(
                            <div className="ismy_recommend_div">
                                <img className="ismy_recommend_img" src={`https://img1.aolaigo.com/group1/${item.product_image}`} key={item.sku_id} />
                                <div  className="ismy_recommend_name">
                                    {item.product_name}
                                </div>
                                <div  className="ismy_recommend_shangpin">
                                    <span className="ismy_recommend_shangpin_l">￥{item.p_price}</span>
                                    <span className="ismy_recommend_shangpin_r">￥{item.m_price}</span>
                                    {/* <span>{this.state.datacost.}</span> */}
                                </div>
                            </div>
                    ))}
                </div>
                <Tabbar></Tabbar>
            </div>
        )
    }
    goSet = ()=>{
        this.props.history.push('/IsSet')
    }
    huiyuanma = ()=>{
        this.props.history.push('/Huiyuanma')
    }
    huashenghuiyuan = ()=>{
        this.props.history.push('Huashenghuiyuan')
    }
    management = ()=>{
        this.props.history.push('Management')
    }
}
export default withRouter(Ismy)