import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import Subheader from 'material-ui/Subheader'
import {setDate} from '../../../../AC'
import './index.sass'

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
      const month = date.toLocaleString('ru', {month: 'long'});
        return(
            <div className="show-date">
                <div className="day">{date.toLocaleString('ru', {day: 'numeric'})}</div>
                <div className="month">{month.replace(month[month.length-1], 'я')}</div>
                <div className="weekday">{date.toLocaleString('ru', {weekday: 'long'})}</div>

            </div>
        )
    };

    render() {
        const {date, today} = this.props;
        return (
                <div className="col-sm-6">
                    <div className="select-date">
                        <Subheader>Выберите день</Subheader>
                        <RaisedButton label="Сегодня" className="btn-day"  onClick = {this.handleToday} />
                        <RaisedButton label="Другой день" className="btn-day"  onClick={() => {this.datePickerStartDate.focus()}} />
                        <DatePicker
                            ref={(datePickerStartDate) => this.datePickerStartDate = datePickerStartDate}
                            hintText="Controlled Date Input"
                            value={date}
                            onChange={this.handleChange}
                            autoOk
                            style={{display: 'none'}}
                            minDate = {today}
                            DateTimeFormat={Intl.DateTimeFormat}
                            locale='ru-RU'
                        />
                        {this.showDate()}
                    </div>
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

