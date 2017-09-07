import React, {Component} from 'react';
import NavBar from './NavBar';
import StepperContent from './StepperContent'

class App extends Component {
    
    render() {
        return (
            <div>
               <NavBar/>
                <StepperContent/>
            </div>

        );
    }
}


export default App;
