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
import RaisedButton from 'material-ui/RaisedButton';

class OrderList extends Component {

    
    render() {
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
                        <TableRow >
                            <TableRowColumn>Малый</TableRowColumn>
                            <TableRowColumn>2017-09-28</TableRowColumn>
                            <TableRowColumn>21:00-23:00</TableRowColumn>
                            <TableRowColumn>150р</TableRowColumn>
                            <TableRowColumn>X</TableRowColumn>
                        </TableRow>
                        <TableRow >
                            <TableRowColumn>Малый</TableRowColumn>
                            <TableRowColumn>2017-010-28</TableRowColumn>
                            <TableRowColumn>17:00-19:00</TableRowColumn>
                            <TableRowColumn>150р</TableRowColumn>
                            <TableRowColumn>X</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <br/>
                <div>
                    Итого: <span>30р </span>
                </div>
                <br/>
                <RaisedButton label="Добавить ещё" />

            </div>
        );
    }
}



export default OrderList;

