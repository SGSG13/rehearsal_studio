import React, {Component} from 'react';
import OrderList from './OrderList'
import OrderForm from './OrderForm'


class StepOrder extends Component {
    
    render() {
        return (
            <div className="row">
                <OrderList/>
                <OrderForm/>
            </div>
        );
    }
}


export default StepOrder;
