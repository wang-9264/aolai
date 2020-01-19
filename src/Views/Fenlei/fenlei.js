import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Tabs } from 'antd';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css'
import {getList} from '../../Redux/Actions/list'
import Item from './Item/item'
import './fenlei.scss'
import Search from '../../Components/Search/search'
import Brands from './Brands/brands'

const { TabPane } = Tabs;
function callback(key) {
    // console.log(key);
  }
class Fenlei extends Component {

    state={
        // datalist:null
    }

  render() {
      // console.log(this.props.datalist[0],9999)
      // this.setState({
      //   tab:this.props.datalist[0]
      // })
      // console.log(this.state.tab)
      const tabs=[{title:'推荐'},{title:'全部品牌'},{title:'奢饰品'},{title:'跨境汇'},{title:'自营好货'},{title:'女装'},{title:'男装'},{title:'鞋包'},{title:'内衣'},{title:'婴儿'}]
      return(this.props.datalist.length ? 
      <div>
        <Search></Search>
            <div className="wang-tabs-aaa">
            <WhiteSpace />
            <Tabs tabs={tabs} >
              {
                this.props.datalist.map((item,index)=>
              //   index===2?<Brands></Brands>:
              // <Item item={this.props.datalist[index+1]}></Item>
              <div key={item.comTitle}>{index===1?<Brands></Brands>:
                <Item item={this.props.datalist[index+1]}></Item>}</div>
                )
              }
            </Tabs>
            <WhiteSpace />
            </div>
      </div>:null
    )
  }
  componentWillMount(){
      // console.log(this.props,2222)
    //   console.log(this.state.tab,33333)
    if(this.props.datalist.length===0){
        this.props.getList()
        // console.log(this.props.getList(),11111)
        // this.setState({
        //     tab:this.props.datalist[0]
        // })
        // console.log('2222')
   
    }
  };
  
  // componentDidMount(){
  //     // console.log(this.props,6666)
  // }
}

const mapStateToProps = (state)=>({
    datalist:state.fenleiReducer
})

const mapDispatchToProps = {
    getList
}
export default connect(mapStateToProps,mapDispatchToProps)(Fenlei) 