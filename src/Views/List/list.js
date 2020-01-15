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
        input:null,
        // clickid:null,
        paiban:true
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
            
            // console.log(this.state.input,1111)
        })
    }
    paibanClick(){
        this.setState({
            paiban:!this.state.paiban
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
                  <li className='wang_list_bar_change iconfont icon-leimupinleifenleileibie' onClick={()=>this.paibanClick()}></li>
              </ul>

              {this.state.paiban?
              //竖向双排版
              <div className="wang_list_wrap" >
                  {   this.state.listinfo?this.state.listinfo.map(item => 
                    <div className="wang_list_info" onClick={()=>this.handleClick((item.wskus[0].sku_id),item)} key={item.wskus[0].sku_id}>
                        <div className="wang_list_info_top">
                            <img src={item.wmimg.url?"https://img4.aolaigo.com/group1/" + (item.wmimg.url).replace(/http.*group1/,''):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAMAAAD3eH5ZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf///8DAwP7+/vv7+8LCwvb29ufn58PDw729vbq6ure3t87OzvHx8d/f3+zs7NbW1sbGxuPj49LS0tra2srKyn5v3rsAAAnBSURBVHja7VzZktswDjRP8Rav///WBUDJlj1K1T5sWfIWO5X4nkELRwMkncdjYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmLifwWeYmvppymIuFgHqMCG89/kkKRzhi3SWN2yWZr4QQ7aOrYQgIy11vnfc4Z2ZtnBJPxj8s+RSPbFYfNHDT8WUIF9cgB/uKx+qi5lu/wlYVy7uSC0GF4PV7ecgfk7c1Ae5MCWV0LIcxLrbQmUUrJjklmr9mAyZxQky+HGPnAjA0wcz8VTRzDmw12rEIgyY2/RIjI7c4PX4q5VyB0uOqv0ZLEnXshlo8BF0CXGqG+jGvGtCg0SJ45gOQ6LRWqdekIEKzeQcB4SY3+LT/qT1ayOZAjrArYbgwHImLEuXt9YZPvRWjDSMv/hCCaHGxL64I21kVcreLJwTT+SF6+s+ogmlvVexcxH0ZLLxfOS6H/TV6K55YMD1VUerTvTjnhtVqQzm9De1bynA0aM6s6eyp9ZyqV16YwEGCzeUoJVTIfEHDttQxbjXLvQGfVElDvYE5Y/HLS1yz/BzHUyzvtfErLy9zBjXhxGPMkGPj5or0tunv/Rox7yevR724gnmey+1uq7fAsteeGgxM8iAytsO5iYniMeNLBNK4p+pdeFHbWF38sTUGH5K1dI+tRiiUJUxwHqlfyXduenJMAe7ncSrKPdlTisHyEjKnt712Uk5KlMvBKeFSpMEnR5tEghrrWuMYkji5H796lOlKLP58k6HPHk0DPdzehd7dKGnAC9i2c9/lcnKDKe4STR9ALdEqU7SLazbFvycAa6DVWhM8z12llvZeckdnIZHdHZSO9kjpINPLyC9Nb66nE1npPYyZFmgPCRZpNky4POMbfcYtxO/yCxkcNy+2hGYswHY4FB7j0vz3HiHouBajlN7J3cluSYECAVKHVBqZBif7K4wzqa8H9cIQPNRHKvTQo6DbipjurRxr3JEVPS6huwaH9ImPRUgJEKEoNKu57OkonlG6x2aHbaO41Bg/I6YpaI5UOT+a5z1l/PQvVPFpLCPIG8jcK64opge2Xw1unRG2j/6PrFjhOlkGJPFiJRoY6qvtdSteaa3rKJsetdkeRZGwtRtHvCe87Lnr6KOetceWN/AxKvhvV9+0FAfWIr2OfbQzxLUHXQKxmaRaN8W/W8md6xocNQf6jEev0Q27UO29RqMeH1Lo53UO3XVPAssm1LeRK+uqd08PtuMEPhCMc3X++KRX66guyGORs1Y9991wb35F+Dk8gjrfUtSPwtULZt9Qc1Y1vMT8cVG4OWVwa91BLvwQEC53N1lVGch0V2/ggkDGIxn4IYfO7rfY6t/Ako47feAtgMR7xvubAVmQl1qw3t8rEWJm0cOf9M2/dGkRbY7gb+ORxty5IqL+KUxC1PqfD24Ytt5yTtW6nr/T1xwsKOlq9snd97d8JuejCCl4/s3gbo1naSRxLlcVOk/u4MS2rAt8MePObny1KGu5KANvt9G9U6XLjkie8v70vIY8PirtD+zRnMMdwy5QdfHZr120KULg/ukNDy1SSeM93QdlbvfoJO6JoP+0AMZiDT11hKLDqAtl+8BP5fI5S1046WHLqHJyCASBpLmr/BAQNHhdKq7xnQ/Rp1GPtDD83k+lMnAPmOV6hF4/XjpxFi9YX/MAERUiwp/LYXOBeCPyYmJiYmJiYmJv4foFqMsZWzAU8/D5+IBPf3YZsrXEl+DhocPh+vbXBVpvNLf7cZ+IqH2rfnEzPG7vvuAca9tRPoSBce3b9k3MPL13SKLVsw1eSGiFG/jBH0yva4ACG77zBGa1lJKUTjFjXed802hTLWuqXGUkoE8wveZmdtp7PI9BDJmTLgkZDHe2Cut2PlX2VcsI3wUk+6FJ2+PXFoMMquSqgHrzl7AXHOC1qangc7kMO+BEWEtiP9eOlD7L0F5jxXizV26R2e/PrC4Iq/WndjdQCXdNWNadFt8cMFTHLwDmPjWCoIyIiJsWwQGDggW9cK/KUf1IPgoltrv7vOzDv8bq+ZtUFb45rCyKlg9vPrsRyDyyUYS2Ew1Xi/b68Uayuy0s1ZnYDp2OEDNl8+5kFBAJcerileSq0hVxNEhH19D1BjheUt57wkBffLXkVXZyNEIwvdLgWzuusCUQm+/LInEsa4Bk/kkMGe0o2Mwe5mqKA2BAlBYvXzIR0jtSY1azqE1eIZ5o71/KHgln23SMVRPhVoGApA0kk9MK8tXu7DcTRJGf3cl8AdIoUpAQVqTdb4FNJiLW5X0M/5qlpwCn/t67p6TNl1XSumxDCDhycaFjG/PUgBPZGs9RCNVsOFAL+BT8h9ePvdA4EKw78GCPoCGW4q3MaUUc9GXosOmRBHtlK6BlyWjbvUNYzGAGEVMC7tkoAcVorv7uQFvMAlgOUCSawYTVig9vIiIMCdF1TEUDowD+z2TTRwncaKEKSRnD5uLLz3+7pN4Z+8c8uK0eQxtzXl+qECQz8USMkUxIq122vAj6mKKYHhEzEEKeIwr9W3pc7ksEAAoOmepGs1ZO9WvTKDFznpehfQgbBcnnWNpC5GkEKs1EbDW308asx38ppSAjvTgJcyBgwujJj+NEOElBIVMeSSXmvJYPuK0ZjAGwk/3cA3ttc3jflKXmPINxCtLLwDWU7QS8dd6mLGHtsjOvVMix8PAI0/wPYCmp1R6tJCzoOfJjGmvrt1gTXdrLWvEO3eVyFa96vZaqXGIWmgURP4ehzT6P48NR62YkK1Bx/tofnyt9Sw+o/zAgmhMYiKkXL5yEzUcJPfnwKpi1iLofurkP6YzJkojC7+axkB8Q5/oK8TjX59xCZPoZyNPYiEAZVL82Qdw0Dy++kszRg9vdTeV3RBLHXMVfarG8NxRHz3eYuD/MyCoWce+yW2Fp1p6NDQ5QHonBZO1ivZXDhXEptboOFILL7awu4txUrXj35/359Te3NI7TWRCEMbnyFPLxtHp0rRHZAn0WNDfsGIKihrrScq5jCTkUpTB0G6Tl+hwLe6tDfxWFC3Lms7MauPGvM9CgVlyuJ3m9bNF29qThaVPdI5uYQqKDYgTMEgNb5suv2fBSjw9esUYJaESMr0VYnBYtmqfCB28XHo/sY9eg4TAgoxugON5rrGrYlkXy2wXEX8bwmM9GUEAC8LJUfFw6PY35pM29U0oI7rTz1UhoYQJlL0DbTylnJERJyJHK7hfFeuS4wF2tZDVRepxLauDXO4FB22frzVtW5fwVEapE49Uu+VCIoIA8j22QjTSPypsxITExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfgP4MMmmVpsno0AAAAAElFTkSuQmCC"} alt=""/>
                        </div>
                        <div className="wang_list_info_under">
                            <div className="wang_list_info_under_top">
                            {item.wsty==1?<span>自营</span>:<mark>专柜同步</mark>}{item.wname}
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
              :
              //横向单品排版
            <div className='wang_danpinpaiban'>
                {
                    this.state.listinfo?this.state.listinfo.map(item=>
                        <div className="wang_danpin_mapwrap" key={item.wskus[0].sku_id}>
                        <img src={item.wmimg.url?"https://img4.aolaigo.com/group1/" + (item.wmimg.url).replace(/http.*group1/,''):"data:image/png;base64,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"}/>
                        <div className="wang_danpinwenzi">
                            <div className="wang_danpinziying">
                        {item.wsty==1?<span>自营</span>:<mark>专柜同步</mark>}{item.wname}
                            </div>
                            <div className="wang_danpinjiange">
                                <span className="wang_danpinjiagexin">￥{item.sprice}0</span>
                                <span className="wang_danpinjiagejiu">￥{item.mprice}0</span>
                            </div>
                      </div>
                        </div>
                        ):null
                }
            </div>
                  }
              
            <BackTop visibilityHeight={10} className="backToTop"/>
        </div>
        )
    }

    handleClick = (id,item)=>{
        // console.log(this.props)
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