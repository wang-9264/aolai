import React,{Component} from 'react'
import {withRouter} from 'react-router'
import './searchAll.scss'
import Axios from 'axios'

class SearchAll extends Component{
    state={
        inputvalue:null,
        listinfo:null,
        arr:''
    }
    render(){
        return (
            <div className="searchAll">
                <div className="searchAll-tab">
                    <span className="iconfont icon-_zuo wang-tab-icon" onClick={()=>this.fanhui()}></span>
                    <form>
                        <span>
                            <input type="text" placeholder="搜索您喜欢的商品" className="search-input" ref="wang" onInput={()=>this.inputchange()}/>
                        </span>
                        <button>
                            <div className="iconfont icon-fangdajing wang-tab-sousuo"></div>
                        </button>
                    </form>
                </div>
                {this.state.listinfo&&this.refs.wang.value?<ul className="listinfo-ul">
                    {this.state.listinfo.map(item=>
                        <li key={item.id} onClick={()=>this.sendClick(`pcid=${item.cid}&title=${item.cname}`,item.cname)}>
                            <p>在<b>{item.chnw}</b>品牌中搜索</p>
                            <span>约<b>{item.numfd}</b>个商品</span>
                        </li>
                        )}
                </ul>:
                <div className="searchAll-views">
                    <div className="views-title">
                        <em className="iconfont icon-zuji wang-tab-lishi"></em>
                    <span>最近搜索：{localStorage.getItem("lishijilu")?<ul style={{marginTop:"0.1rem"}}>{
                        localStorage.getItem("lishijilu").split(",").map((item,index)=><li style={{fontSize:"16px",color:"black",lineHeight:"0.18rem",height:"0.18rem",marginTop:"0.05rem"}} key={index}>{item}</li>)
                        }</ul>:null}</span>
                    </div>
                </div>
                }
            </div>
        )
    }

    // componentDidMount(){
    //     Axios.get(`https://searchapi.aolaigo.com/appsearch/cmd/GetSuggestWords?cmd=GetSuggestWords&psize=18&page=1&keyword=${this.state.inputchange}`).then(res=>{
    //         console.log(res.data,11111)
    //     })
    // }

    inputchange(){
        this.setState({
            inputchange:this.refs.wang.value
        },()=>{
            // console.log(this.state.inputchange)
            if(this.state.inputchange===""){
                return
            }
            Axios.get(`https://searchapi.aolaigo.com/appsearch/cmd/GetSuggestWords?cmd=GetSuggestWords&psize=18&page=1&keyword=${this.state.inputchange}`).then(res=>{
                // console.log(res.data.Data.SuggestVMs,11111)
              
                var obj;
    
                obj=res
                // console.log(obj,4444)
                if(obj===undefined){
                    // console.log(7777777)
                    return
                }
                if(obj.data.Data.SuggestVMs!==null){
                    
                    this.setState({
                        listinfo:obj.data.Data.SuggestVMs
                    },()=>{
                        // console.log(this.state.listinfo,11111) 
                    })
                   
                }
            })
        })
        
    }

    sendClick = (id,cname)=>{
    // var ids=id.replace(/.*title=/,'')
    // console.log(cname,111)
    if(localStorage.getItem("lishijilu")===null){
        localStorage.setItem("lishijilu",cname)
    }
    else{
        var bendi = localStorage.getItem("lishijilu")
        bendi=bendi.concat(',',cname)
        // console.log(bendi,22222)
        localStorage.setItem("lishijilu",bendi)
    }
    // localStorage.setItem("lishijilu",cname)
    this.props.history.push(`/list/${id}`)
    }

    fanhui(){
        this.props.history.push('/index')
    }


}

export default withRouter(SearchAll) 