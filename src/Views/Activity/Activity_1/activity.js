import React, { Component } from 'react'
import Preview from "../../Home/Components/Yulan/yulan";
import Daohang from '@/Components/Daohang/daohang';


export default class activity extends Component {
    state={
        datalist:[]
    }
    componentWillMount(){
        this.setState({
            datalist:this.props.data
        })
    }
    render() {
        return (
            this.state.datalist.length?
                <div style={{background:'#f3f3f3'}}>
                <Daohang></Daohang>
                {/* 奥莱钜惠 */}
                {this.state.datalist[0].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"50%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}


                  {/* 专柜同款 */}
                  {this.state.datalist[1].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"1.25rem",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}


                  {/* 专柜服饰 */}
                  {this.state.datalist[2].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
                  <Preview mystyle={{justifyContent: "spaceBetween",padding:'0 0.05rem'}}>
                  {this.state.datalist[3].cons.map(item=>
                  <li  style={{width:"1.15rem"}} key={item.skuid}>
                    <img src={item.src?"https://img4.aolaigo.com/group1/" + (item.src).replace(/http.*group1/,''):"data:image/png;base64,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"}/>
                    <h3>{item.title}</h3>
                  <p>￥ {item.sprice}</p>
                  </li>
                  )}
                  </Preview>


                  {/* 时尚轻奢 */}
                  {this.state.datalist[4].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
                  <Preview mystyle={{justifyContent: "spaceBetween",padding:'0 0.05rem'}}>
                  {this.state.datalist[5].cons.map(item=>
                  <li  style={{width:"1.15rem"}} key={item.skuid}>
                    <img src={item.src?"https://img4.aolaigo.com/group1/" + (item.src).replace(/http.*group1/,''):"data:image/png;base64,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"}/>


                  </li>
                  )}
                  </Preview>


                  {/* 自营服饰 */}
                  {this.state.datalist[6].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
                  <Preview mystyle={{justifyContent: "spaceBetween",padding:'0 0.05rem'}}>
                  {this.state.datalist[7].cons.map(item=>
                  <li  style={{width:"1.15rem"}} key={item.skuid}>
                    <img src={item.src?"https://img4.aolaigo.com/group1/" + (item.src).replace(/http.*group1/,''):"data:image/png;base64,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"}/>


                  </li>
                  )}
                  </Preview>


                  {/* 美妆 */}
                  {this.state.datalist[8].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
                  <Preview mystyle={{justifyContent: "spaceBetween",padding:'0 0.05rem'}}>
                  {this.state.datalist[9].cons.map(item=>
                  <li  style={{width:"1.15rem"}} key={item.skuid}>
                    <img src={item.src?"https://img4.aolaigo.com/group1/" + (item.src).replace(/http.*group1/,''):"data:image/png;base64,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"}/>


                  </li>
                  )}
                  </Preview>


                  {/* 母婴 */}
                  {this.state.datalist[10].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
                  <Preview mystyle={{justifyContent: "spaceBetween",padding:'0 0.05rem'}}>
                  {this.state.datalist[11].cons.map(item=>
                  <li  style={{width:"1.15rem"}} key={item.src}>
                    <img src={item.src?"https://img4.aolaigo.com/group1/" + (item.src).replace(/http.*group1/,''):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAMAAAD3eH5ZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf///8DAwP7+/vv7+8LCwvb29ufn58PDw729vbq6ure3t87OzvHx8d/f3+zs7NbW1sbGxuPj49LS0tra2srKyn5v3rsAAAnBSURBVHja7VzZktswDjRP8Rav///WBUDJlj1K1T5sWfIWO5X4nkELRwMkncdjYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmLifwWeYmvppymIuFgHqMCG89/kkKRzhi3SWN2yWZr4QQ7aOrYQgIy11vnfc4Z2ZtnBJPxj8s+RSPbFYfNHDT8WUIF9cgB/uKx+qi5lu/wlYVy7uSC0GF4PV7ecgfk7c1Ae5MCWV0LIcxLrbQmUUrJjklmr9mAyZxQky+HGPnAjA0wcz8VTRzDmw12rEIgyY2/RIjI7c4PX4q5VyB0uOqv0ZLEnXshlo8BF0CXGqG+jGvGtCg0SJ45gOQ6LRWqdekIEKzeQcB4SY3+LT/qT1ayOZAjrArYbgwHImLEuXt9YZPvRWjDSMv/hCCaHGxL64I21kVcreLJwTT+SF6+s+ogmlvVexcxH0ZLLxfOS6H/TV6K55YMD1VUerTvTjnhtVqQzm9De1bynA0aM6s6eyp9ZyqV16YwEGCzeUoJVTIfEHDttQxbjXLvQGfVElDvYE5Y/HLS1yz/BzHUyzvtfErLy9zBjXhxGPMkGPj5or0tunv/Rox7yevR724gnmey+1uq7fAsteeGgxM8iAytsO5iYniMeNLBNK4p+pdeFHbWF38sTUGH5K1dI+tRiiUJUxwHqlfyXduenJMAe7ncSrKPdlTisHyEjKnt712Uk5KlMvBKeFSpMEnR5tEghrrWuMYkji5H796lOlKLP58k6HPHk0DPdzehd7dKGnAC9i2c9/lcnKDKe4STR9ALdEqU7SLazbFvycAa6DVWhM8z12llvZeckdnIZHdHZSO9kjpINPLyC9Nb66nE1npPYyZFmgPCRZpNky4POMbfcYtxO/yCxkcNy+2hGYswHY4FB7j0vz3HiHouBajlN7J3cluSYECAVKHVBqZBif7K4wzqa8H9cIQPNRHKvTQo6DbipjurRxr3JEVPS6huwaH9ImPRUgJEKEoNKu57OkonlG6x2aHbaO41Bg/I6YpaI5UOT+a5z1l/PQvVPFpLCPIG8jcK64opge2Xw1unRG2j/6PrFjhOlkGJPFiJRoY6qvtdSteaa3rKJsetdkeRZGwtRtHvCe87Lnr6KOetceWN/AxKvhvV9+0FAfWIr2OfbQzxLUHXQKxmaRaN8W/W8md6xocNQf6jEev0Q27UO29RqMeH1Lo53UO3XVPAssm1LeRK+uqd08PtuMEPhCMc3X++KRX66guyGORs1Y9991wb35F+Dk8gjrfUtSPwtULZt9Qc1Y1vMT8cVG4OWVwa91BLvwQEC53N1lVGch0V2/ggkDGIxn4IYfO7rfY6t/Ako47feAtgMR7xvubAVmQl1qw3t8rEWJm0cOf9M2/dGkRbY7gb+ORxty5IqL+KUxC1PqfD24Ytt5yTtW6nr/T1xwsKOlq9snd97d8JuejCCl4/s3gbo1naSRxLlcVOk/u4MS2rAt8MePObny1KGu5KANvt9G9U6XLjkie8v70vIY8PirtD+zRnMMdwy5QdfHZr120KULg/ukNDy1SSeM93QdlbvfoJO6JoP+0AMZiDT11hKLDqAtl+8BP5fI5S1046WHLqHJyCASBpLmr/BAQNHhdKq7xnQ/Rp1GPtDD83k+lMnAPmOV6hF4/XjpxFi9YX/MAERUiwp/LYXOBeCPyYmJiYmJiYmJv4foFqMsZWzAU8/D5+IBPf3YZsrXEl+DhocPh+vbXBVpvNLf7cZ+IqH2rfnEzPG7vvuAca9tRPoSBce3b9k3MPL13SKLVsw1eSGiFG/jBH0yva4ACG77zBGa1lJKUTjFjXed802hTLWuqXGUkoE8wveZmdtp7PI9BDJmTLgkZDHe2Cut2PlX2VcsI3wUk+6FJ2+PXFoMMquSqgHrzl7AXHOC1qangc7kMO+BEWEtiP9eOlD7L0F5jxXizV26R2e/PrC4Iq/WndjdQCXdNWNadFt8cMFTHLwDmPjWCoIyIiJsWwQGDggW9cK/KUf1IPgoltrv7vOzDv8bq+ZtUFb45rCyKlg9vPrsRyDyyUYS2Ew1Xi/b68Uayuy0s1ZnYDp2OEDNl8+5kFBAJcerileSq0hVxNEhH19D1BjheUt57wkBffLXkVXZyNEIwvdLgWzuusCUQm+/LInEsa4Bk/kkMGe0o2Mwe5mqKA2BAlBYvXzIR0jtSY1azqE1eIZ5o71/KHgln23SMVRPhVoGApA0kk9MK8tXu7DcTRJGf3cl8AdIoUpAQVqTdb4FNJiLW5X0M/5qlpwCn/t67p6TNl1XSumxDCDhycaFjG/PUgBPZGs9RCNVsOFAL+BT8h9ePvdA4EKw78GCPoCGW4q3MaUUc9GXosOmRBHtlK6BlyWjbvUNYzGAGEVMC7tkoAcVorv7uQFvMAlgOUCSawYTVig9vIiIMCdF1TEUDowD+z2TTRwncaKEKSRnD5uLLz3+7pN4Z+8c8uK0eQxtzXl+qECQz8USMkUxIq122vAj6mKKYHhEzEEKeIwr9W3pc7ksEAAoOmepGs1ZO9WvTKDFznpehfQgbBcnnWNpC5GkEKs1EbDW308asx38ppSAjvTgJcyBgwujJj+NEOElBIVMeSSXmvJYPuK0ZjAGwk/3cA3ttc3jflKXmPINxCtLLwDWU7QS8dd6mLGHtsjOvVMix8PAI0/wPYCmp1R6tJCzoOfJjGmvrt1gTXdrLWvEO3eVyFa96vZaqXGIWmgURP4ehzT6P48NR62YkK1Bx/tofnyt9Sw+o/zAgmhMYiKkXL5yEzUcJPfnwKpi1iLofurkP6YzJkojC7+axkB8Q5/oK8TjX59xCZPoZyNPYiEAZVL82Qdw0Dy++kszRg9vdTeV3RBLHXMVfarG8NxRHz3eYuD/MyCoWce+yW2Fp1p6NDQ5QHonBZO1ivZXDhXEptboOFILL7awu4txUrXj35/359Te3NI7TWRCEMbnyFPLxtHp0rRHZAn0WNDfsGIKihrrScq5jCTkUpTB0G6Tl+hwLe6tDfxWFC3Lms7MauPGvM9CgVlyuJ3m9bNF29qThaVPdI5uYQqKDYgTMEgNb5suv2fBSjw9esUYJaESMr0VYnBYtmqfCB28XHo/sY9eg4TAgoxugON5rrGrYlkXy2wXEX8bwmM9GUEAC8LJUfFw6PY35pM29U0oI7rTz1UhoYQJlL0DbTylnJERJyJHK7hfFeuS4wF2tZDVRepxLauDXO4FB22frzVtW5fwVEapE49Uu+VCIoIA8j22QjTSPypsxITExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExfgP4MMmmVpsno0AAAAAElFTkSuQmCC"}/>


                  </li>
                  )}
                  </Preview>


                  {/* 活动规则 */}
                  {this.state.datalist[12].cons.map(item=>
                  <img src={"https://img4.aolaigo.com/group1/"+(item.src).replace(/.*group1/,'')} style={{width:"100%",margin:"0",padding:'0',float:"left"}} key={item.src}/>
                  )}
            </div>:null
        )
    }
}
