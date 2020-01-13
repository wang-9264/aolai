import React,{Component} from 'react'
import {withRouter} from 'react-router'
import './search.scss'

class Search extends Component{
    render(){
        return(
            <div className="wang_list_searchbar">
                <div className="iconfont icon-_zuo wang_list_searchbar_icon" onClick={this.handleClick.bind(this)}></div>
                <form className="search-form">
                    <label className="search-form-lable">
                        <input type="text" placeholder="搜索您喜欢的商品" className="search-form-input"/>
                        <div className="iconfont icon-fangdajing search-form-sousuo"></div>
                    </label>
                </form>
            </div>
        )
    }
    handleClick(){
        this.props.history.goBack()
    }
}

export default withRouter(Search)