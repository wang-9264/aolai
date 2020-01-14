import React, { Component } from 'react'
import './Huashenghuiyuan.css'
import Axios from 'axios'
export default class Huashenghuiyuan extends Component {
    state = {
        datalist: null,
        datacost:null,
        isshow:false
    }
    componentDidMount() {
        Axios.post('https://memberapi.aolaigo.com/appmember.ashx', '{"opt":3,"cmd":1,"os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9192A2DCE9202B22E8F7AC9898072177AE94B63A377B75DAB9B21AB75FEAA33BE84BE796E7D533DBFD461667C83D0057F8BB93CE8F373470216820F65D1EC2702FDF95B3AA2BCCE3C92E2EA2AE4389355A905E161E4A8B1E2FD4C6EF4D4A1828658802890120D5EDB9824E7C193788063","nick_name":"","imei":"dasd1223423we","time_stamp":1578900842072,"crc":"6f2e46ffe86973b84f01240cb73a2185"}')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    datalist: res.data.data
                })
                console.log(this.state.datalist)
            })
            Axios.post('https://memberapi.aolaigo.com/appmember.ashx', '{"opt":3,"cmd":28,"imei":"dasd1223423we","os":"wap","uid":"hs20165214554","uname":"13079885375","code":"08012C58D35B65BB8F0AF51D607066A3F97BE564FA4618A39A6EC4A0DFBA3ADDA62801AA282855FEA3A969633448CD17783757C6F614B7DF981B5486308265894BE4BFA7A6ED92A9DB7E0F29ADCDB73ECE99CBE9E393C7ED5A58A644BAD63088642A0E8C2C817D8959DFB0A0D538FE1D31A5B038B28A9F1E872383DFE87A720448C8B831E8D44B6EA10F7D293893C92B80A2BE00894A303EA2768252156997541CFDBA5E78433FAF54549BCDAECF77E1E396019FA44BAAAC1B3150361E5D47BA2AAF6A8D6B701A06CCAAB562E259E2AD4D1644B554DD19536152BFAF11B0E8002C8839F7F9D4868F5EA416683CE624BE002229389510CFC1C30F037D87D3AD5B1841458FC590AD566F8D6FF77C3111BC4691F753F5107B51A4E481F1AA930997BAC89CB645BFE7E0","nick_name":"","time_stamp":1578970307749,"crc":"4dba6d8ab8702a826883eb5be6767e6f"}')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    datacost: res.data.data
                })
            })


    }
    render() {
        return (

            <div>
                {this.state.datalist&&this.state.datacost ?
                    <div className="member_index">
                        <div className="huiyuan_head">
                            <span className="isset_icon iconfont icon-_zuo" onClick={this.goback}></span>账户管理
                        </div>

                        <div className="member_touxiang">
                            <div className="member_avatar">我的头像</div>
                            {this.state.datalist.icon_img ?
                                <img className="member_img" src={`https://img1.aolaigo.com/group1/${this.state.datalist.icon_img}`} />
                                : '2'
                            }
                        </div>


                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">实名认证</div>
                            {this.state.datalist.identityAuthentication.isRealName == 0 ?
                                <div className="member_nav_r">已认证<span className="member_icon iconfont icon-zuo"></span></div> : <div className="member_nav_r">可享生日特权等权益<span class="member_icon iconfont icon-zuo"></span></div>}
                        </div>
                        </div>

                        <div className="member_out">
                            <div className="member_nav">
                            <div className="member_nav_l">昵称</div>
                            <div className="member_nav_r">
                                {this.state.datalist.tel_no.replace(this.state.datalist.tel_no.substring(3, 7), "****")}
                                <span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">收货地址管理</div>
                            <div className="member_nav_r"><span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">绑定手机</div>
                            <div className="member_nav_r">
                                {this.state.datalist.tel_no.replace(this.state.datalist.tel_no.substring(3, 7), "****")}
                                <span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">绑定邮箱</div>
                            <div className="member_nav_r"><span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">生日</div>
                            <div className="member_nav_r">
                                {this.state.datalist.birthday}
                                <span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">性别</div>
                            <div className="member_nav_r">{this.state.datalist.sex}<span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>

                        <div className="member_out"><div className="member_nav">
                            <div className="member_nav_l">修改登录密码  </div>
                            <div className="member_nav_r"><span className="member_icon iconfont icon-zuo"></span></div>
                        </div>
                        </div>
                        <div className="member_out"><div className="member_nav member_nav1">
                            <div className="member_nav_l">我的关注</div>
                            <div className="member_nav_r">已保存</div>
                        </div>
                        </div>
                        <div className="member_tuijian1">
                        {this.state.datacost.map((item,index)=>
                            <div className="member_tuijian" key={index} onClick={()=>(this.like(item.isElect,index))}>
                                
                                <img className="member_tuijian_img" src={`https://img1.aolaigo.com/group1/${item.category_icon}`} />
                                {item.isElect==0?<span className="member_xing1 iconfont icon-xing1"></span>
                                :<span className="member_xing2 iconfont icon-xing1"></span>}
                                
                                <div className="member_tuijian_span" >{item.name}</div>
                            </div>
                        )}
                        </div>
                    </div>
                    : null}
            </div>

        )
    }
    like(item,index){
        let aa=this.state.datacost.slice()
        console.log(aa)
        this.setState({isshow:!this.state.isshow})
        // if(this.state.isshow==true){
        // aa[index].isElect=aa[index].isElect+1}else{
        //     aa[index].isElect=aa[index].isElect-1
        // }
        if(item===0){
            aa:aa[index].isElect=1
        }else if(item===1){
            aa:aa[index].isElect=0

        }
        console.log(aa)
       
        this.setState({
            datacost:aa
        })
    }
    goback = ()=>{
        this.props.history.push('/Ismy') 
    }
}
