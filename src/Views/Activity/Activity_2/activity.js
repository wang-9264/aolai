import React, { Component } from 'react'
import Preview from "../../Home/Components/Yulan/yulan";
import {withRouter} from "react-router"

class activity2 extends Component {
    listClick(id) {
        this.props.history.push(`/list/${id}`)
    }
    detailClick(id){
        this.props.history.push(`/detail/${id}`)
    }
    render() {
        var datalist=this.props.data

        return (
            datalist.length?
            <div>
                {datalist.map(item=>
                    <div key={item.comid}>
                        <Preview mystyle={{justifyContent: "spaceBetween",padding:'0',margin:'0'}} >
                        {(item.cons)?item.cons.map(data=>{
                            return (item.cons.length<4)?
                            <li style={{flex:'1',padding:'0',margin:'0'}} key={data.src} onClick={()=>(data.typeName=="search"?this.listClick(data.skuid):null)}>
                            <img style={{width:'100%'}} src={"https://img3.aolaigo.com/group1/" + data.src.replace(/http.*group1/,'')}/>
                            </li>
                            :data.src?<li style={{width:"30%",padding:'0 0.06rem',margin:'0 0 0.1rem 0',flex:'1'}} key={data.src} onClick={()=>this.detailClick(data.skuid)}>
                            <img style={{width:'92%',margin:'0 auto'}} src={"https://img3.aolaigo.com/group1/" + data.src.replace(/http.*group1/,'')}/>
                            <h4>{data.title}</h4>
                            <p style={{color:'red'}}>￥ {data.sprice}</p>
                            </li>:
                            <li style={{padding:'0 0.06rem',margin:'0 0 0.05rem 0',flex:'1'}} key={data.title}>
                            <span>{data.title}</span>
                            </li>})
                            :item.coms[1].cons.map(data=>
                                   <li style={{width:"30%",padding:'0 0.06rem',margin:'0 0 0.1rem 0',flex:'1'}} key={data.src} onClick={()=>this.detailClick(data.skuid)}>
                                    <img style={{width:'92%',margin:'0 auto'}} src={"https://img3.aolaigo.com/group1/" + data.src.replace(/http.*group1/,'')}/>
                                    <h4>{data.title}</h4>
                                    <p style={{color:'red'}}>￥ {data.sprice}</p>
                                    </li>
                                )}
                        </Preview>
                    </div>
                    )}
            </div>
            :null
        )
    }
}

export default withRouter(activity2)