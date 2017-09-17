import React, {Component} from 'react'
import Map from './Map'

export default function Contacts() {
    return (
        <div className='container'>
           <div className='row'>
               <h2 style={{textAlign: 'center'}}>Контакты</h2>
               <div className="col-md-6">
                   <p><span>Адрес: </span>Беларусь, Могилёв ул. Первомайская 24</p>
                   <p><span>Телефон: </span>+375-(00)-000-00-00</p>
               </div>
               <div className="col-md-6">
                   <Map/>
               </div>
           </div>
        </div>
    );
}