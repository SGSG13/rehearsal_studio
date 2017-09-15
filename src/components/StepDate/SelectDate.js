import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import {setDate} from '../../AC'

const styleB = {
    margin: 12,
    display: 'inline-block'
};
const styleP = {
    margin: 12,
    display: 'inline-block',
    width: 140
};

class SelectDate extends Component {

    static propTypes = {
        // from connect
        date: PropTypes.object.isRequired,
        setDate: PropTypes.func.isRequired
    };

    handleChange = (event, date) => {
        this.props.setDate(date);
    };

    handleToday = () => {
        this.props.setDate(new Date);
    };

    render() {
        const {date} = this.props;
        return (
                <div className="col-lg-6">
                    <RaisedButton label="Сегодня" style={styleB} onClick = {this.handleToday} />
                    <DatePicker
                        hintText="Controlled Date Input"
                        value={date}
                        onChange={this.handleChange}
                        autoOk
                        style={styleP}
                    />
                </div>
        );
    }
}


export default connect((state) => {
    return {
        date: state.order.date
    }
}, {setDate})(SelectDate)

