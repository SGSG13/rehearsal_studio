import React, {Component} from 'react'
import Map from './Map'
import './index.sass'

export default function Contacts() {
    return (
        <div className='container'>
           <div className='row'>
               <h2 className="title-page">Контакты</h2>
               <div className="col-md-6">
                   <div className="contacts">
                       <span><b>Адрес:</b></span>
                       <p className="address">Беларусь, Могилёв ул. Первомайская 24</p>
                       <span><b>Телефон:</b></span>
                       <p>+375-(00)-000-00-00</p>
                       <p>+375-(00)-000-00-00</p>
                   </div>
               </div>
               <div className="col-md-6">
                   <Map/>
               </div>
           </div>
        </div>
    );
}