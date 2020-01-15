import React, { Component } from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router'
import './brands.scss'

class Brands extends Component {
    state={
        datalist:null
    }
    render() {
        return (
            <div>
                {
                    this.state.datalist?<ul>{
                    this.state.datalist.map(item=><li key={item.bid} onClick={()=>this.pinclick(`keyword=${encodeURIComponent(item.bname)}`,item.bname)} className="wang_brands">{item.bname}</li>)
                        }</ul>:null
                }
            </div>
        )
    }

    componentWillMount(){
        Axios.get('https://searchapi.aolaigo.com/appsearch/cmd/GetBrands?cmd=GetBrands','cmd=GetBrands').then(res=>{
            // console.log(res.data.Data.MainVM.Sbvms,11111)
            this.setState({
                datalist:res.data.Data.MainVM.Sbvms
            })

            var arr=[]
            for(var m=0;m<res.data.Data.MainVM.Sbvms.length;m++){
                arr.push(res.data.Data.MainVM.Sbvms[m].pyfirst)
            }
            // console.log(arr,999999)
            let resc = []
            for (let i = 0; i < arr.length; i++) {
                if (resc.indexOf(arr[i].toUpperCase()) === -1) {
                    resc.push(arr[i].toUpperCase())
                }
            }
            // console.log(resc,888888)
        })
    }

    pinclick(id,name){
        // console.log(encodeURIComponent(name),88888)
        this.props.history.push(`/list/${id}`)
    }
}


export default withRouter(Brands)
