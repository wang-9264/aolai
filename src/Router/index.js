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

const router = (
    <Provider store={Store}>
        <App>
            <Switch>

            </Switch>
        </App>
    </Provider>
)

export default router