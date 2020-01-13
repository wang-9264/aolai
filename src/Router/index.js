import {
    HashRouter ,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from '../App'
import React from 'react'
import {Provider} from 'react-redux'
import Store from '../Redux/store'
import Fenlei from '../Views/Fenlei/fenlei'
import List from '../Views/List/list'
import Detail from '../Views/Detail/detail'

const router = (
    <Provider store={Store}>
        <HashRouter>
        <App>
            <Switch>
                <Route path="/fenlei" component={Fenlei}/>
                <Route path="/list/:myid" component={List} exact />
                <Route path="/detail/:detailid" component={Detail} exact />
            </Switch>
        </App>
        </HashRouter>
    </Provider>
)

export default router