import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class MySwiper extends Component{
    render(){
        // console.log(this.props.mingzi)
        return <div className={`swiper-container ${this.props.mingzi}`}>{this.props.children}</div>
    }
    componentDidMount() {
        var obj={
            loop:true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
           ...this.props.configure
        }
        new Swiper('.'+this.props.mingzi,{...obj})
    }
}

export default MySwiper