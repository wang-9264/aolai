import React, { Component } from 'react'
import axios from "axios";
import Activity1 from './Activity_1/activity'
import Activity2 from './Activity_2/activity'
import Daohang from '@/Components/Daohang/daohang';

import {withRouter} from 'react-router'


class Activity extends Component {
    state={
        datalist:[]
    }
    componentWillMount(){
      console.log(this.props.match)
        axios
          .post(
            "https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
            `{"os":"wap","opt":1,"cmd":1,"id":"${this.props.match.params.myid}"}`
          )
          .then(res => {
            this.setState({
              datalist: res.data.data
            });
          })
    }
    render() {
      console.log(this.state.datalist)
      // var qqq=this.props.match.params.myid
        return (
          <div>
          <Daohang></Daohang>
          {this.state.datalist.length?
          this.props.match.params.myid=='8109'?
            <Activity1 data={this.state.datalist}></Activity1>:
            // this.props.match.params.myid=='8104'?
            <Activity2 data={this.state.datalist}></Activity2>
            // :<div>该页面没做</div>
          :null}
          </div>
        )
    }
}

export default withRouter(Activity)

