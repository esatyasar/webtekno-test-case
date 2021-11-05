import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from '../pages/Home'

function AppRouter() {
    return (
        <BrowserRouter>
            <div className='container-fluid'>
            <Navbar />
                <Switch>
                    <Route path ="" component = {Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter