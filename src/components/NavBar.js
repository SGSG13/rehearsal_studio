import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleToggle = () => this.setState({isOpen: !this.state.isOpen});

    handleClose = () => this.setState({isOpen: false});

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
                    <MenuItem onClick={this.handleClose}>Главная</MenuItem>
                    <MenuItem onClick={this.handleClose}>Фотогалерея</MenuItem>
                    <MenuItem onClick={this.handleClose}>О нас</MenuItem>
                    <MenuItem onClick={this.handleClose}>Контакты</MenuItem>
                </Drawer>
                
            </div>

        );
    }
}


export default NavBar;
