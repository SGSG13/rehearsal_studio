import React, {Component} from 'react'
import OrderList from './OrderList'
import OrderForm from './OrderForm'

export default function StepOrder (){
    return (
        <div className="row">
            <OrderList/>
            <OrderForm/>
        </div>
    );
}


