import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "../App";
import React from "react";
import { Provider } from "react-redux";
import Store from "../Redux/store";

//首页
import Home from "@/Views/Home/home";

//分类
import Fenlei from '../Views/Fenlei/fenlei'
import List from '../Views/List/list'
import Detail from '../Views/Detail/detail'
import SearchAll from '@/Components/Search/searchAll'

//后三页
import Popularity from '../Views/Popularity/Popularity'
import ShoppingCar from '../Views/Shoppingcar/Shoppingcar'
import Ismy from '../Views/Ismy/Ismy'
import IsSet  from '../Views/Ismy/IsSet/IsSet'
import Huiyuanma  from '../Views/Ismy/Huiyuanma/Huiyuanma'
import Huashenghuiyuan  from '../Views/Ismy/Huashenghuiyuan/Huashenghuiyuan'
import Management  from '../Views/Ismy/Management/management'
import Activity from "../Views/Activity/activity"

import ChengZhangZhi  from '../Views/Ismy/ChengZhangZhi/chengzhangzhi'
import YuGuJiangLi  from '../Views/Ismy/YuGuJiangLi/yugujiangli'
import HuaSheng  from '../Views/Ismy/HuaSheng/huasheng'
import DaiFuKuan  from '../Views/Ismy/DaiFuKuan/daifukuan'
import DaiFaHuo  from '../Views/Ismy/DaiFaHuo/daifahuo'
import DaiShouHuo  from '../Views/Ismy/DaiShouHuo/daishouhuo'
import TuiHuanHuo  from '../Views/Ismy/TuiHuanHuo/tuihuanhuo'
import QuanBuDingDan  from '../Views/Ismy/QuanBuDingDan/quanbudingdan'

import YouHuiQuan  from '../Views/Ismy/YouHuiQuan/youhuiquan'
import HongBao  from '../Views/Ismy/HongBao/hongbaao'
import ZuJi  from '../Views/Ismy/ZuJi/zuji'
import KeFu  from '../Views/Ismy/KeFu/kefu'
import ShouCang  from '../Views/Ismy/ShouCang/shoucang'

const router = (
  <Provider store={Store}>
    <HashRouter>
      <App>
        <Switch>
          {/*首页*/}
          {/* <Route from='/index' render={<Home/>}/> */}
          <Route from="/index" component={Home} exact/>
          {/* <Route psth='/index' render={()=><Home></Home>}/> */}
          {/* <Route from="/activity/:myid" component={} exact/> */}
          <Route from="/activity/:myid" component={Activity} exact/>


          <Route path="/fenlei" component={Fenlei}/>
          <Route path="/list/:myid" component={List} exact />
          <Route path="/detail/:detailid" component={Detail} exact />
          <Route path="/search"  component={SearchAll} exact/>


          {/* 后三页 */}
          <Route path='/Popularity' component={Popularity}></Route>
          <Route path='/Shoppingcar' component={ShoppingCar}></Route>
          <Route path='/Ismy' render={()=><Ismy></Ismy>}></Route>
          <Route path='/IsSet' component={IsSet}></Route>
          <Route path='/Huiyuanma' component={Huiyuanma}></Route>
          <Route path='/Huashenghuiyuan' component={Huashenghuiyuan}></Route>
          <Route path='/Management' component={Management}></Route>

          <Route path='/Chengzhangzhi' component={ChengZhangZhi}></Route>
          <Route path='/Yugujiangli' component={YuGuJiangLi}></Route>
          <Route path='/Huasheng' component={HuaSheng}></Route>
          <Route path='/Daifukuan' component={DaiFuKuan}></Route>

          <Route path='/Daifahuo' component={DaiFaHuo}></Route>
          <Route path='/Daishouhuo' component={DaiShouHuo}></Route>
          <Route path='/Tuihuanhuo' component={TuiHuanHuo}></Route>
          <Route path='/Quanbudingdan' component={QuanBuDingDan}></Route>

          <Route path='/Youhuiquan' component={YouHuiQuan}></Route>
          <Route path='/Hongbao' component={HongBao}></Route>
          <Route path='/Zuji' component={ZuJi}></Route>
          <Route path='/Kefu' component={KeFu}></Route>
          <Route path='/Shoucang' component={ShouCang}></Route>


          <Redirect from='/' to='/index' />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
);

export default router;
