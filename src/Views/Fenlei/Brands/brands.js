import React, { Component } from 'react'
import Axios from 'axios'

export default class Brands extends Component {
    render() {
        return (
            <div>
                1111111
            </div>
        )
    }

    componentWillMount(){
        Axios.get('https://searchapi.aolaigo.com/appsearch/cmd/GetBrands?cmd=GetBrands','cmd=GetBrands').then(res=>{
            console.log(res.data.Data.MainVM.Sbvms,11111)
        })
    }
}
