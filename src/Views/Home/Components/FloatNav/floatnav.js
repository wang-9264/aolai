import React, { Component } from 'react'
import qqqqq from './floatnav.module.css'

export default class Floatnav extends Component {
    render() {

        return (
            <ul style={{...this.props.mystyle}} className={qqqqq.floatnavbox}>
                {this.props.children}
                <div></div>
            </ul>
        )
    }
}
