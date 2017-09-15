import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import Subheader from 'material-ui/Subheader'
import {setDate} from '../../AC'

const styleB = {
    margin: 12,
    display: 'inline-block'
};
const styleP = {
    display: 'none'
};

class SelectDate extends Component {

    static propTypes = {
        // from connect
        date: PropTypes.object.isRequired,
        today: PropTypes.object.isRequired,
        setDate: PropTypes.func.isRequired
    };

    handleChange = (event, date) => {
        this.props.setDate(date);
    };

    handleToday = () => {
        const {setDate, today} = this.props;
        setDate(today);
    };

    showDate = () => {
      const {date} = this.props;
        return(
            <div style={{marginTop: 50, marginLeft: 90}}>
                <div style={{fontSize: 120, lineHeight: '100px'}}>{date.toLocaleString('ru', {day: 'numeric'})}</div>
                <div style={{fontSize: 32, lineHeight: '39px'}}>{date.toLocaleString('ru', {month: 'long'})}</div>
                <div style={{fontSize: 34, lineHeight: '20px'}}>{date.toLocaleString('ru', {weekday: 'long'})}</div>
            </div>
        )
    };

    render() {
        const {date, today} = this.props;
        return (
                <div className="col-lg-6">
                    <Subheader>Выберите день</Subheader>
                    <RaisedButton label="Сегодня" style={styleB} onClick = {this.handleToday} />
                    <RaisedButton label="Другой день" style={styleB}  onClick={() => {this.datePickerStartDate.focus()}} />
                    <DatePicker
                        ref={(datePickerStartDate) => this.datePickerStartDate = datePickerStartDate}
                        hintText="Controlled Date Input"
                        value={date}
                        onChange={this.handleChange}
                        autoOk
                        style={styleP}
                        minDate = {today}
                    />
                    <div>{this.showDate()}</div>
                </div>
        );
    }
}


export default connect((state) => {
    return {
        date: state.order.date,
        today: new Date
    }
}, {setDate})(SelectDate)

