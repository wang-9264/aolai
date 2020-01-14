import React, { Component } from 'react'
import {withRouter} from "react-router"
import './daohang.scss'

class Daohang extends Component {
    huidaoshouye(){
        this.props.history.push(`/index`)
    }
    render() {
        return (
            <div id="daohang">
                <div onClick={()=>this.huidaoshouye()}>回到首页</div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Daohang)