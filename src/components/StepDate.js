import React, {Component} from 'react';
import RoomSlots from './RoomSlots'
import SelectDate from './SelectDate'
import {connect} from 'react-redux'
import getDate from '../utils';

class StepDate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            controlledDate: new Date()
        };
    }


    render() {
        return (
            <div className="row">
                <SelectDate/>
                <RoomSlots booked = {this.props.booked} />
            </div>

        );
    }
}



export default connect((state) => {
    const booked = state.slots.booked;
    const filterDate = booked.filter(item => {
        return (item.date === '201708999')
    });

    return {
        booked: filterDate
    }
}, {})(StepDate)

