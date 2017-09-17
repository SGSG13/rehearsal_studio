import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }; 

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    }; 

    render() {
        return (
            <div>
                <AppBar
                    title="SG13 Studio"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = {this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.isOpen}
                    onRequestChange={(isOpen) => this.setState({isOpen})}
                >
                    <MenuItem onClick={this.handleClose}><NavLink activeStyle={{color: 'red'}}  to="/" exact >Бронирование</NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink  activeStyle={{color: 'red'}} to="/halls">Залы</NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink activeStyle={{color: 'red'}}  to="/contacts">Контакты</NavLink></MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default NavBar;
