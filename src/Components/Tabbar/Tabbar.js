import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className="tabbar_index" >
                <div className="tabbar_yangshi">
                    <NavLink to="/index" activeClassName="tabbar_color">
                        <span class="tabbar_icon iconfont icon-shouye"></span>
                        <div>首页</div>
                    </NavLink>
                </div>
                <div className="tabbar_yangshi">
                    <NavLink to="#" activeClassName="tabbar_color">
                        <span class="tabbar_icon iconfont icon-leimupinleifenleileibie"></span>
                        <div>分类</div>
                    </NavLink>
                </div>
                <div className="tabbar_yangshi">
                    <NavLink to="/Popularity" activeClassName="tabbar_color">
                        <span class="tabbar_icon iconfont icon-fengche"></span>
                        <div>人气优品</div>

                    </NavLink>
                </div>
                <div className="tabbar_yangshi">
                    <NavLink to="/Shoppingcar" activeClassName="tabbar_color">
                        <span class="tabbar_icon iconfont icon-gouwuche"></span>
                        <div>购物车</div>

                    </NavLink>
                </div>
                <div className="tabbar_yangshi">
                    <NavLink to="/Ismy" activeClassName="tabbar_color">
                        <span class="tabbar_icon iconfont icon-wode1"></span>
                        <div>我的</div>

                    </NavLink>
                </div>
            </div>
        )
    }
}

