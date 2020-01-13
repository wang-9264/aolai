import {
    HashRouter as MyRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from '../App'
import React from 'react'
import { Provider } from 'react-redux'
import Store from '../Redux/store'
import Popularity from '../Views/Popularity/Popularity'
import ShoppingCar from '../Views/Shoppingcar/Shoppingcar'
import Ismy from '../Views/Ismy/Ismy'
import IsSet  from '../Views/Ismy/IsSet/IsSet'
import Huiyuanma  from '../Views/Ismy/Huiyuanma/Huiyuanma'
import Huashenghuiyuan  from '../Views/Ismy/Huashenghuiyuan/Huashenghuiyuan'
import Management  from '../Views/Ismy/Management/Management'
// import Tabbar from '../Views/Tabbar/Tabbar'

const router = (
    <MyRouter>
        <Provider store={Store}>

            <App>
                <switch>
                    <Route path='/Popularity' component={Popularity}></Route>
                    <Route path='/Shoppingcar' component={ShoppingCar}></Route>
                    <Route path='/Ismy' render={()=><Ismy></Ismy>}></Route>
                    <Route path='/IsSet' component={IsSet}></Route>
                    <Route path='/Huiyuanma' component={Huiyuanma}></Route>
                    <Route path='/Huashenghuiyuan' component={Huashenghuiyuan}></Route>
                    <Route path='/Management' component={Management}></Route>

                </switch>
            </App>
        </Provider>

    </MyRouter>
)
// const router = (
//     <Provider store={Store}>
//         <HashRouter>
//         <App>
//             <Switch>
//                 {/* <Route path='/Popularity' component={Popularity}></Route> */}
//                 {/* <Route path='/Shoppingcar' component={ShoppingCar}></Route> */}
//                 <Route path='/Ismy' render={()=><Ismy></Ismy>}></Route>
//                 {/* <Route path='/Tabbar' render={()=><Tabbar></Tabbar>}></Route> */}

//             </Switch>
//         </App>
//         </HashRouter>
//     </Provider>
// )

export default router