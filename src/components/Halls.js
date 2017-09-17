import React, {Component} from 'react'

export default function Halls() {
    return (
        <div className="container">
            <div className="row">
                <h2 style={{textAlign: 'center'}}>Залы</h2>
                <div className="col-md-6">
                    <h3>Metal Hall</h3>
                    <p>Площадь 32 м. </p>
                    <p>Оборудование:</p>
                    <ul>
                        <li>Гитарный усилитель Peavey JSX Joe Satriani 120W cab. 412</li>
                        <li>Гитарный усилитель  Mesa boogie dual rectifier solo head 100W & Ibanez cab. 412</li>
                        <li>Бассовый усилитель MarkBass Litle 800 & MarkBass cab. 610</li>
                        <li>Барабанная установка Ludwig</li>
                        <li>Линия: активные акустические колонки Berenger b315 (общая мощность 1100W) + микшерный пульт Soundcraft epm8, микрофоны Shure sm58.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>British Hall</h3>
                    <p>Площадь 32 м. </p>
                    <p>Оборудование:</p>
                    <ul>
                        <li>Гитарный усилитель fender twin reverb 85W динамики 2х12</li>
                        <li>Гитарный усилитель  PEAVEY Classic 50-410</li>
                        <li>Бассовый усилитель ASHDOWN MAG C410T-300 EVO II</li>
                        <li>Барабанная установка Mapex</li>
                        <li>Линия: активные акустические колонки Berenger b315 (общая мощность 1100W) + микшерный пульт Soundcraft epm8, микрофоны Shure sm58.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


