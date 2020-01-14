import React, { Component } from 'react'

export default class chengzhangzhi extends Component {
    render() {
        return (
            <div>
                <div className="member_index">
                    <div className="huiyuan_head">
                        <span className="isset_icon iconfont icon-_zuo" onClick={this.goback}></span>会员福利社
                </div>
                Kerwin 正在开发中
                </div>
            </div>
        )
    }

    goback = () => {
        this.props.history.push('/Ismy')
    }
}
