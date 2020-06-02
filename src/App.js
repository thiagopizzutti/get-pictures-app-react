import React from "react"
import {Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
      <div>
        <Switch>
            <Header />
          <Route path='/'>
            <Photos />
            <h1>Home Page</h1>
          </Route>
          <Route path='/cart'>
            <Cart />
            
          </Route>
        </Switch>
        </div>

    )
}

export default App