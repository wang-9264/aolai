import React, { Component } from 'react'
import './Huashenghuiyuan.css'
import Axios from 'axios'
export default class Huashenghuiyuan extends Component {
    state = {
        datalist: null
    }
    componentDidMount() {
        Axios.post('https://memberapi.aolaigo.com/appmember.ashx', '{"opt":3,"cmd":1,"os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9192A2DCE9202B22E8F7AC9898072177AE94B63A377B75DAB9B21AB75FEAA33BE84BE796E7D533DBFD461667C83D0057F8BB93CE8F373470216820F65D1EC2702FDF95B3AA2BCCE3C92E2EA2AE4389355A905E161E4A8B1E2FD4C6EF4D4A1828658802890120D5EDB9824E7C193788063","nick_name":"","imei":"dasd1223423we","time_stamp":1578900842072,"crc":"6f2e46ffe86973b84f01240cb73a2185"}')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    datalist: res.data.data
                })
                // console.log(this.state.datalist.data)

            })
    }
    render() {
        return (

            <div>
                {this.state.datalist ?
                    <div>
                        <div className="huiyuan_head">
                            <span className="isset_icon iconfont icon-_zuo" onClick={this.goback}></span>账户管理
                        </div>
                        <div className="member_touxiang">
                            <div className="member_avatar">我的头像</div>
                            {this.state.datalist.icon_img ? 
                            <img className="member_img" src={`https://img1.aolaigo.com/group1/${this.state.datalist.icon_img}`}/>
                            : '2'
                        }
                        </div>
                    </div>
                    : null}
            </div>


        )
    }
}
