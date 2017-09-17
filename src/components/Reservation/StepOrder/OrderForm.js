import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
import {setBand, setPhone} from '../../../AC'

class OrderForm extends Component {

    static propTypes = {
        // from connect
        user: PropTypes.object.isRequired,
        setBand: PropTypes.func.isRequired,
        setPhone: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);

        this.state = {
            band: '',
            phone: ''
        };
    }
    
    handleChange = type => ev => {
        const {value} = ev.target;
        switch(type){
            case 'band':
                this.setState({
                    [type]: value
                });
                break;
            case 'phone':
                if(value.match(/^[0-9()\-+ ]+$/) || value === '') {
                    this.setState({
                        [type]: value
                    });
                }
        }
    };

    setBandField = () => {
        this.props.setBand(this.state.band);
    };

    setPhoneField = () => {
        this.props.setPhone(this.state.phone);
    };

    componentWillMount() {
        const {band, phone} = this.props.user;
        this.setState({
            band, phone
        })
    }
    
    render() {
        return (
            <div className="col-lg-5">
                <Subheader>Ваши данные</Subheader>
                <TextField
                    name="band"
                    floatingLabelText="Название группы"
                    value = {this.state.band}
                    onChange = {this.handleChange('band')}
                    onBlur = {this.setBandField}
                /><br />
                <TextField
                    name="phone"
                    floatingLabelText="Ваш телефон"
                    value = {this.state.phone}
                    onChange = {this.handleChange('phone')}
                    onBlur = {this.setPhoneField}
                /><br />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        user: state.user
    }
}, {setBand, setPhone})(OrderForm)
