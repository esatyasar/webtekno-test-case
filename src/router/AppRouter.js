import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from '../pages/Home'

function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
                <Switch>
                    {/* <Route path ="" component = {Dashboard}/> 
                    <Route path ="" component = {Details}/> */}
                    <Route path ="" component = {Home}/>
                </Switch>
        </BrowserRouter>
    )
}

export default AppRouter