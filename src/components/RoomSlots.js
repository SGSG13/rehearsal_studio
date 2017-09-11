import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,

} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';


export default class RoomSlots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [1],
            slot_0: 0,
            slot_1: 1,
            slot_2: 2,
            slot_3: 3,
            slot_4: 4,
            slot_5: 5,
            slot_6: 6
        };
    }


    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows
        });
    };

    componentWillMount() {
        this.bookedSlot();
    }

    bookedSlot = () => {
        const {booked} = this.props;
        if(!booked.length) return;
        const bookedDay = booked[0].slots;

        bookedDay.forEach( num => {
            this.setState({
                ['slot_' + num]: -1
            })
        })
    };

    getClassName = (index) => {
        const slot = this.state['slot_'+ index];
         return  slot < 0 ? 'booked' : ''
    };

    render() {
        return (
            <div>
                <Subheader>Малый зал</Subheader>
                <Table multiSelectable onRowSelection={this.handleRowSelection}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow className={this.getClassName(0)} selected={this.isSelected(this.state.slot_0)}>
                            <TableRowColumn>9:00-11:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(1)} selected={this.isSelected(this.state.slot_1)}>
                            <TableRowColumn>11:00-13:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(2)} selected={this.isSelected(this.state.slot_2)}>
                            <TableRowColumn>13:00-15:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(3)} selected={this.isSelected(this.state.slot_3)}>
                            <TableRowColumn>15:00-17:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(4)} selected={this.isSelected(this.state.slot_4)}>
                            <TableRowColumn>17:00-19:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(5)} selected={this.isSelected(this.state.slot_5)}>
                            <TableRowColumn>19:00-21:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(6)} selected={this.isSelected(this.state.slot_6)}>
                            <TableRowColumn>21:00-23:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        );
    }
}