import React, {Component} from 'react'
import NavBar from './NavBar'
import StepperContent from './StepperContent'
import Contacts from './Contacts'
import About from './About'
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
                        <Route path="/about" component = {About}/>
                    </Switch>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default App;
