import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,

} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';


export default class TableExampleControlled extends Component {
    state = {
        selected: [1],
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
            <div>
                <Subheader>Малый зал</Subheader>
                <Table multiSelectable onRowSelection={this.handleRowSelection}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow selected={this.isSelected(0)}>
                            <TableRowColumn>9:00-11:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(1)}>
                            <TableRowColumn>11:00-13:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(2)}>
                            <TableRowColumn>13:00-15:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(3)}>
                            <TableRowColumn>15:00-17:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(4)}>
                            <TableRowColumn>17:00-19:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(5)}>
                            <TableRowColumn>19:00-21:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow selected={this.isSelected(6)}>
                            <TableRowColumn>21:00-23:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        );
    }
}