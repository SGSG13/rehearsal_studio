import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RoomSlots from './RoomSlots'
import SelectDate from './SelectDate'
import {setSlots} from '../../AC'
import {filtratedSlotsSelector} from '../../selectors'

class StepDate extends Component {

    static propTypes = {
        // from connect
        booked: PropTypes.array.isRequired
    };
    
    render() {
        return (
            <div className="row">
                <SelectDate/>
                <RoomSlots
                    key = {Object.keys(this.props.booked).length > 0 ? this.props.booked[0].date : 1}
                    {...this.props}
                />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        booked: filtratedSlotsSelector(state),
        hall: state.order.hall,
        slots: state.order.slots
    }
}, {setSlots})(StepDate)

