import React,{Component} from 'react'
import {withRouter} from 'react-router'
import './item.scss'

class Item extends Component {
    render(){
        let {item} = this.props
        // console.log(this.props)
        return (
            <div>
            <div className="item_top">
                <p><span>热门分类</span></p>
                <div>
                  <div>
                      {
                          item.coms[1].cons.map(item=>
                          <span key={item.skuid} onClick={()=>this.handleClick(item.skuid)}>
                            <div>
                                <img src={"https://img1.aolaigo.com/group1/"+item.src} alt=""/>
                            </div>
                            <p>{item.title}</p>
                          </span>
                          )
                      }
                  </div>
                </div>
            </div>
            <div className="item_bottom">
                <p><span>热门品牌</span></p>
                <div>
                    <div>
                        {
                            item.coms[2].cons.map((item,index) => <span key={index} onClick={()=>this.handleClick(item.skuid)}>
                                <div>
                                    <img src={"https://img1.aolaigo.com/group1/"+item.src} alt=""/>
                                </div>
                            </span>
                            )
                        }
                    </div>
                </div>
            </div>
            </div>
        )
    }
    handleClick = (id)=>{
        // console.log(this.props,11111)
        this.props.history.push(`/list/${id}`)
    }
}

export default withRouter(Item)