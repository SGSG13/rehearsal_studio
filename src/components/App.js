import React, {Component} from 'react'
import NavBar from './NavBar'
import StepperContent from './StepperContent'
import Contacts from './Contacts'
import Halls from './Halls'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route path="/" component = {StepperContent} exact/>
                        <Route path="/contacts" component = {Contacts}/>
                        <Route path="/halls" component = {Halls}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
