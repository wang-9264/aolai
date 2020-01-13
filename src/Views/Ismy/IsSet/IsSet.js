import React, { Component } from 'react'
import './IsSet.css'
import {withRouter} from 'react-router-dom'

 class set extends Component {
    render() {
        return (
            <div className="isset_index">
                <div className="isset_head">
                <span className="isset_icon iconfont icon-_zuo" onClick={this.goback}></span>
                <div>设置</div>
                </div>
                <div className="isset_nav">
                    <li className="isset_nav_li">清除缓存</li>
                    <li className="isset_nav_li">关于
                        <div className="isset_nav_div">V6.2.00</div>
                    </li>
                </div>
                <button className="isset_btn">退出登录</button>
            </div>
        )
    }
    goback = ()=>{
        this.props.history.push('/Ismy') 
    }
}
export default withRouter(set)