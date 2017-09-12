import React, {Component} from 'react';
import RoomSlots from './RoomSlots'
import SelectDate from './SelectDate'
import {connect} from 'react-redux'
import {dateToString} from '../utils/dateToString';

class StepDate extends Component {

    render() {
        return (
            <div className="row">
                <SelectDate/>
                <RoomSlots key = {this.props.booked.length? this.props.booked[0].date : 1}
                           booked = {this.props.booked}
                           hall = {this.props.hall}
                />
            </div>
        );
    }
}


export default connect((state) => {
    const booked = state.slots.booked;
    const date = dateToString(state.order.date);
    if(!booked.length) return {
        booked: booked
    };
    const filterBooked = booked.filter(item => {
        if(!item.date) return false;
        return (item.date === date)
    });
    return {
        booked: filterBooked,
        hall: state.order.hall
    }
}, {})(StepDate)

