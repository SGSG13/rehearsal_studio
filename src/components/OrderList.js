import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,

} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import {dateToString} from '../utils/dateToString';
import {connect} from 'react-redux'


class OrderList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: 0
        }
    }

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
    
    getSum = (slots) => {
        let sum = 0;
          slots.map((slot) => {
              sum += slot < 4 ? 14 : 15
          });
        return sum
    };

    _renderTableRow = (slot, order) => {
        return (
            <TableRow key = {slot} >
                <TableRowColumn>{order.hall === 'big' ? 'Большой' : 'Малый'}</TableRowColumn>
                <TableRowColumn>{dateToString(order.date)}</TableRowColumn>
                <TableRowColumn>{this.getTime(slot)}</TableRowColumn>
                <TableRowColumn>{this.getPrice(slot)} руб.</TableRowColumn>
                <TableRowColumn>X</TableRowColumn>
            </TableRow>
        )
    };
    
    render() {
        const {order} = this.props;
        const slots = order.slots;
        return (
            <div className="col-lg-7">
                <Subheader>Ваш заказ</Subheader>
                <Table selectable = {false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Зал</TableHeaderColumn>
                            <TableHeaderColumn>Дата</TableHeaderColumn>
                            <TableHeaderColumn>Время</TableHeaderColumn>
                            <TableHeaderColumn>Цена</TableHeaderColumn>
                            <TableHeaderColumn/>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {slots.map((slot) => this._renderTableRow(slot, order))}
                    </TableBody>
                </Table>
                <br/>
                <div>
                    Итого: <span>{this.getSum(slots)} руб</span>
                </div>
            </div>
        );
    }
}



export default connect((state) => {
    return {
        order: state.order
    }
}, {})(OrderList)

