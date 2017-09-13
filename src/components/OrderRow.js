import React, {Component} from 'react';
import {
    TableRow,
    TableRowColumn,

} from 'material-ui/Table';

import {connect} from 'react-redux'
import {dateToString} from '../utils/dateToString';

class OrderRow extends Component {
    
    getTime = (slot) => {

        switch (slot) {
            case 0:
                return '9:00-11:00';
            case 1:
                return '11:00-13:00';
            case 2:
                return '13:00-15:00';
            case 3:
                return '15:00-17:00';
            case 4:
                return '17:00-19:00';
            case 5:
                return '19:00-21:00';
            case 6:
                return '21:00-23:00';
            default:
                return '-'
        }
    };

    getPrice = (slot) => {
        return slot < 4 ? '14' : '15'
    };
    
    deleteSlot = () => {
        console.log('deeeel', this.props.slot);
        this.props.deleteSlot(this.props.slot);
    };

    
    render() {
        const {order, slot} = this.props;
        return (
            <TableRow key = {slot} >
                <TableRowColumn>{order.hall === 'big' ? 'Большой' : 'Малый'}</TableRowColumn>
                <TableRowColumn>{dateToString(order.date)}</TableRowColumn>
                <TableRowColumn>{this.getTime(slot)}</TableRowColumn>
                <TableRowColumn>{this.getPrice(slot)} руб.</TableRowColumn>
                <TableRowColumn><span onClick = {this.deleteSlot}>Х</span></TableRowColumn>
            </TableRow>
        )
    }
}



export default connect((state) => {
    return {
       
    }
}, {})(OrderRow)

