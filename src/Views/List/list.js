import React,{Component} from 'react'
import { BackTop } from 'antd'
import Axios from 'axios'
import 'antd/dist/antd.css'
import './list.scss'
import {connect} from 'react-redux'
import {sendList} from '../../Redux/Actions/liebiao'
import Search from '../../Components/Search/search'

// const { BackTop } = antd;
class List extends Component{
    state = {
        listinfo:null,
        input:null
        // clickid:null
    }
    componentWillMount(){
        // console.log(this.props.match.params.myid,222222)
        Axios.get(`https://searchapi.aolaigo.com/appsearch/cmd/GetAppSearchResult?${this.props.match.params.myid}&category=category&cmd=GetAppSearchResult`,`${this.props.match.params.myid}&category=category&cmd=GetAppSearchResult`).then(res=>{
            // console.log(res.data.Data,3333333)
            this.setState({
                listinfo:res.data.Data.MainOutputVM.OutputSkuInfoVMs,
                input:res.data.Data.MenuVMs
                // clickid:res.data.Data.MainOutputVM.OutputSkuInfoVMs
            })
            
            console.log(this.state.input,1111)
        })
    }
    render(){
        return(
        <div className="wang_list" >
            {
                this.state.input?<Search cname={this.state.input}></Search>:null
            }
              <ul className="wang_list_bar">
                  <li>价格</li>
                  <li>热卖</li>
                  <li>折扣</li>
                  <li>上新</li>
                  <li className="wang_list_bar_change">w</li>
              </ul>
              <div className="wang_list_wrap" >
                  {   this.state.listinfo?this.state.listinfo.map(item => 
                    <div className="wang_list_info" onClick={()=>this.handleClick((item.wskus[0].sku_id),item)} key={item.wskus[0].sku_id}>
                        <div className="wang_list_info_top">
                            <img src={"https://img4.aolaigo.com/group1/"+(item.wmimg.url.replace(/http.*group1/,''))} alt=""/>
                        </div>
                        <div className="wang_list_info_under">
                            <div className="wang_list_info_under_top">
                                <span>自营</span>{item.wname}
                            </div>
                            <div className="wang_list_info_under_bottom">
                                <span className="wang_list_info_under_bottom_left">￥{item.sprice}0</span>
                                <span className="wang_list_info_under_bottom_right">￥{item.mprice}0</span>
                            </div>
                      </div>
                      </div>
                      ):null
                  }
              </div>
            <BackTop visibilityHeight={10} className="backToTop"/>
        </div>
        )
    }

    handleClick = (id,item)=>{
        console.log(this.props)
        this.props.history.push(`/detail/${id}`)
        this.props.sendList(item)
    }
}

const mapStateToProps = null

const mapDispatchToProps = {
    sendList
}

export default connect(mapStateToProps,mapDispatchToProps)(List)


// onClick={()=>this.handleClick(item.wskus[0].sku_id)}
// (item.wskus[0].sku_id)