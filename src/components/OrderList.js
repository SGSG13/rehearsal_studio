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
    state = {
        selected: []
    };

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows
        });
    };
    
    render() {
        return (
            <div className="col-lg-6">
                <Subheader>Ваш заказ</Subheader>
                <Table onRowSelection={this.handleRowSelection}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Зал</TableHeaderColumn>
                            <TableHeaderColumn>Дата</TableHeaderColumn>
                            <TableHeaderColumn>Время</TableHeaderColumn>
                            <TableHeaderColumn>Цена</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow selected={this.isSelected(0)}>
                            <TableRowColumn>Малый</TableRowColumn>
                            <TableRowColumn>2017-09-28</TableRowColumn>
                            <TableRowColumn>21:00-23:00</TableRowColumn>
                            <TableRowColumn>150р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(1)}>
                            <TableRowColumn>Малый</TableRowColumn>
                            <TableRowColumn>2017-010-28</TableRowColumn>
                            <TableRowColumn>17:00-19:00</TableRowColumn>
                            <TableRowColumn>150р</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <RaisedButton label="Добавить ещё" />
                <div>
                    Итого: <span>30р </span>
                </div>

            </div>
        );
    }
}



export default OrderList;

