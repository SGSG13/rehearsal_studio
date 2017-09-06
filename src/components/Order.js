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
import TextField from 'material-ui/TextField';


class Order extends Component {
    state = {
        selected: [],
    };

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    render() {
        return (
            <div className="row">
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
                    <div>
                        Итого: <span>30р </span>
                    </div>
                    <RaisedButton label="Добавить ещё" />
                </div>
                <div className="col-lg-6">
                    <Subheader>Ваши данные</Subheader>
                    <TextField
                        hintText=""
                        floatingLabelText="Группа"
                        errorText="Введите название группы"
                    /><br />
                    <TextField
                        hintText=""
                        floatingLabelText="Телефон"
                        errorText="Введите телефон"
                    /><br />
                    <TextField
                        hintText=""
                        floatingLabelText="Комментарий"
                        multiLine={true}
                        rows={4}
                    /><br />
                </div>

            </div>
        );
    }
}



export default Order;
