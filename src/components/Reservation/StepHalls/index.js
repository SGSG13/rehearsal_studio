import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Paper from 'material-ui/Paper'
import {setHall, getUser} from '../../../AC'
import './index.sass'


class StepHalls extends Component {

    static propTypes = {
        // from connect
        hall: PropTypes.string.isRequired,
        setHall: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired
    };

    selectHall = (ev, val) => {
        this.props.setHall(val);
    };

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="halls-img">
                        <Paper className="hall hall-metal" zDepth={2} />
                        <Paper className="hall hall-british" zDepth={2} />
                    </div>    
                    <RadioButtonGroup className="wrap-radio-btns" name="halls" onChange = {this.selectHall} defaultSelected={this.props.hall}>
                        <RadioButton
                            value="metal"
                            label= "Metal Hall"
                            className="radio-btn"
                        />
                        <RadioButton
                            value="british"
                            label="British Hall"
                            className="radio-btn"
                        />
                    </RadioButtonGroup>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        hall: state.order.hall
    }
}, {setHall, getUser})(StepHalls)
