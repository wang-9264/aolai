import React, { Component } from 'react'
import moduleStyle from './yulan.module.css'

export default class Yulan extends Component {
    render() {

        return (
            <ul style={{...this.props.mystyle}} className={moduleStyle.yulan}>
                {this.props.children}
            </ul>
        )
    }
}
