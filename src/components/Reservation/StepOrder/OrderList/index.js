import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'
import Subheader from 'material-ui/Subheader'
import OrderRow from './OrderRow'
import {deleteSlot} from '../../../../AC'

class OrderList extends Component {

    static propTypes = {
        // from connect
        order: PropTypes.object.isRequired,
    };
    
    getSum = (slots) => {
        let sum = 0;
          slots.map((slot) => {
              sum += slot < 4 ? 14 : 15
          });
        return sum
    };

    render() {
        const {order} = this.props;
        const slots = order.slots;
        return (
            <div className="col-md-7">
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
                        {slots.map((slot) => <OrderRow key = {slot} deleteSlot = {this.props.deleteSlot} slot = {slot} order = {order}/>)}
                        {slots.length > 0 ? '' : <TableRow><TableRowColumn>У вас нет заказов</TableRowColumn></TableRow>}
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
}, {deleteSlot})(OrderList)

