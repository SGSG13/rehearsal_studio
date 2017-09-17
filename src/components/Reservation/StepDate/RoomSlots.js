import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import Subheader from 'material-ui/Subheader'

class RoomSlots extends Component {

    static propTypes = {
        hall: PropTypes.string.isRequired,
        slots: PropTypes.array.isRequired,
        booked: PropTypes.array.isRequired,
        setSlots: PropTypes.func.isRequired
    };
   
    constructor(props) {
        super(props);

        this.state = {
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
        return this.props.slots.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.props.setSlots(selectedRows)
    };
    
    componentWillMount() {
        this.bookedSlot();
    }
    
    bookedSlot = () => {
        if(!Object.keys(this.props.booked).length || !this.props.booked[0].slots.length ) return;
        const booked = this.props.booked[0].slots;
        booked.forEach( num => {
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
        const {hall} = this.props;
        return (
            <div>
                <Subheader>{hall === 'metal' ? 'Metal Hall' : 'British Hall'}</Subheader>
                <Table multiSelectable onRowSelection={this.handleRowSelection}>
                    <TableBody displayRowCheckbox={false} deselectOnClickaway = {false}>
                        <TableRow className={this.getClassName(0)}
                                  selectable = {(this.state.slot_0 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_0)}
                        >
                            <TableRowColumn>9:00-11:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(1)}
                                  selectable = {(this.state.slot_1 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_1)}
                        >
                            <TableRowColumn>11:00-13:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(2)}
                                  selectable = {(this.state.slot_2 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_2)}
                        >
                            <TableRowColumn>13:00-15:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(3)}
                                  selectable = {(this.state.slot_3 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_3)}
                        >
                            <TableRowColumn>15:00-17:00</TableRowColumn>
                            <TableRowColumn>14р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(4)}
                                  selectable = {(this.state.slot_4 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_4)}
                        >
                            <TableRowColumn>17:00-19:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(5)}
                                  selectable = {(this.state.slot_5 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_5)}
                        >
                            <TableRowColumn>19:00-21:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                        <TableRow className={this.getClassName(6)}
                                  selectable = {(this.state.slot_6 >= 0) ? true : false}
                                  selected={this.isSelected(this.state.slot_6)}
                        >
                            <TableRowColumn>21:00-23:00</TableRowColumn>
                            <TableRowColumn>15р</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default RoomSlots