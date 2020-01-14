import React, { Component } from 'react'
import Axios from 'axios'

export default class chengzhangzhi extends Component {
    state = {
        datalist: null,
        datacost: null,
    }
    componentDidMount() {
        Axios.post('https://memberapi.aolaigo.com/appmember.ashx', '{"opt":3,"cmd":1,"os":"wap","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9E59DFC9816BA43ABDCA6C25042275FCC19B078661C2502483D2D81832AECA2C6FE1A2BBA85A49987E76A71D37C9639F219D669B63AE1BC4EA7CA3E820F35ADF0358C083687DCAAD4C488F45BA8D6E56C89C1F98E18D32CF33659824A3FC2265208AA6F5411679EC74B6FFDE51776F049","nick_name":"","imei":"dasd1223423we","time_stamp":1578992861693,"crc":"d38be173cb5f3eb5c81c563876cf1a3e"}')
            .then(res => {
                this.setState({
                    datalist: res.data.data
                })
                console.log(this.state.datalist)

            })

        Axios.post('https://crmapi.aolaigo.com/command.ashx', '{"opt":"4","cmd":"2","memcode":"hs20165207661","os":"wap","idfa":"","uid":"hs20165207661","uname":"13998475375","code":"08012C58D35B65BB46405209ACE646E23485C80A4E3E35AAC998CC3100116F3F14AB7AEEE27E853D291967585257E2A001391B404E8654E59AFDFC23AA5B7C3FB0CB42349CDFE2C4F629B950CC2B081656B7F118CF9D106A0E295D60251C79A2D956BE0AB26AAB5708FDDEA584A7DD93BC38EA101A1A5A40B03A9F692977A2A5833D69B07E465E41AFBF66B3C79455A5490B1B7DE6F8B7A0D4C12B37078AA3C0548BE5EC930E90F0270D6EC4E7E8B8701607B91AEC3F56E9E59DFC9816BA43ABDCA6C25042275FCC19B078661C2502483D2D81832AECA2C6FE1A2BBA85A49987E76A71D37C9639F219D669B63AE1BC4EA7CA3E820F35ADF0358C083687DCAAD4C488F45BA8D6E56C89C1F98E18D32CF33659824A3FC2265208AA6F5411679EC74B6FFDE51776F049","nick_name":"","imei":"dasd1223423we","time_stamp":1578993636013,"crc":"f5c5d904701333d93cc3e45378136e63"}')
            .then(res => {
                this.setState({
                    datacost: res.data.data.memdetail
                })
                console.log(this.state.datacost)

            })
    }

    render() {
        return (
            <div>
                {this.state.datalist && this.state.datacost?
                    <div>
                        <div className="member_index">
                            <div className="huiyuan_head">
                                <span className="isset_icon iconfont icon-_zuo" onClick={this.goback}></span>会员福利社
                </div>
                            Kerwin 正在开发中
                </div>
                        <div>
                            <div>
                                <div>
                                    <img src={`https://img1.aolaigo.com/group1/${this.state.datalist.icon_img}`} />
                                    <span>{this.state.datalist.tel_no}</span>
                                    <div>{this.state.datacost.mem_levelname}</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> : null
                }
            </div>
        )
    }

    goback = () => {
        this.props.history.push('/Ismy')
    }
}
