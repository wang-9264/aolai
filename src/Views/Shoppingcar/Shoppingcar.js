import React, { Component } from 'react'
import './Shoppingcar.css'
export default class Shoppingcar extends Component {
    render() {
        return (
            <div className="shopping_index">
                <h3 className="shopping_head">购物车</h3>
                <div className="shopping_nav">
                <img className="shopping_bg" src="http://m.aolaigo.com/app/image/cartNone_02.png?v=37391f9" />
                <button className="shopping_btn">去首页逛逛</button>
                </div>
            </div>
        )
    }
}
