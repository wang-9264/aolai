import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class MySwiper extends Component{
    render(){
        // console.log(this.props.mingzi)
        return <div className={`swiper-container ${this.props.mingzi}`} style={{width:"100%",height:"100%"}}>
            {this.props.children}
        </div>
    }
    componentDidMount() {
        var obj={
            loop:true,
            autoplay:true,
           ...this.props.configure
        }
        // console.log(this.props.configure)
        new Swiper('.'+this.props.mingzi,{...obj})
    }
}

export default MySwiper