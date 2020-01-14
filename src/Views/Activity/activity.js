import React, { Component } from 'react'
import axios from "axios";
import Activity1 from './Activity_1/activity'

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
            `{"os":"wap","opt":1,"cmd":1,"id":"8109"}`
          )
          .then(res => {
            sessionStorage.setItem("homeshepin", JSON.stringify(res.data.data));
            this.setState({
              datalist: res.data.data
            });
          })
    }
    render() {
      console.log(this.state.datalist)
        return (
          this.state.datalist.length?
          <Activity1 data={this.state.datalist}/>
            :null
        )
    }
}

export default withRouter(Activity)
