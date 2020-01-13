import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import 'antd/dist/antd.css'
// import 'antd-mobile/dist/antd-mobile.css'
import {getList} from '../../Redux/Actions/list'
import Item from './Item/item'
import './fenlei.scss'
import Search from '../../Components/Search/search'

const { TabPane } = Tabs;
function callback(key) {
    // console.log(key);
  }
class Fenlei extends Component {

    state={
        tab:[]
    }
  render() {
      // console.log(this.props.datalist[0],9999)
      // this.setState({
      //   tab:this.props.datalist[0]
      // })
      // console.log(this.state.tab)
    return (
      <div>
        <Search></Search>
        {this.props.datalist[0]===undefined?null:
            
            <Tabs defaultActiveKey="1" onChange={callback} >
                {
                  this.props.datalist[0].cons.map((item,index)=>
                        <TabPane tab={item.title} key={index+1} size="small" tabBarGutter={1}>
                          {index===1?null:
                        <Item item={this.props.datalist[index+1]}></Item>
                      }
                        </TabPane> 
                    )
                }
                {/* <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
                </TabPane> */}
            </Tabs>
          }
      </div>
    );
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