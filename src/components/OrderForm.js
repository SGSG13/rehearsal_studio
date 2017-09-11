import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

class OrderForm extends Component {

    state = {
        band: '',
        phone: ''
    };

    handleChange = type => ev => {
        const {value} = ev.target;
        this.setState({
            [type]: value
        })
    };


    render() {
        return (
            <div className="col-lg-6">
                <Subheader>Ваши данные</Subheader>
                <TextField
                    floatingLabelText="Группа"
                    // errorText="Введите название группы"
                    value = {this.state.band}
                    onChange = {this.handleChange('band')}
                /><br />
                <TextField
                    floatingLabelText="Телефон"
                    // errorText="Введите телефон"
                    value = {this.state.phone}
                    onChange = {this.handleChange('phone')}
                /><br />
            </div>
        );
    }
}


export default OrderForm;
