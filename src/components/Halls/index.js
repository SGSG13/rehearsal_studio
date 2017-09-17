import React, {Component} from 'react'
import './index.sass'

export default function Halls() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="title-page">Залы</h2>
                <div className="col-md-6">
                    <div className="hall">
                        <h3>Metal Hall</h3>
                        <p className="square">Площадь 32 м<sup>2</sup></p>
                        <p>Оборудование:</p>
                        <ul>
                            <li>Гитарный усилитель Peavey JSX Joe Satriani 120W и кабинет Peavey 4х12</li>
                            <li>Гитарный усилитель Mesa Boogie Dual Rectifier Solo Head 100W и кабинет Mesa Boogie 4х12</li>
                            <li>Бассовый усилитель MarkBass Litle 800 и кабинет MarkBass 6x10</li>
                            <li>Барабанная установка Ludwig</li>
                            <li>Линия: активные акустические колонки Berenger b315 (общая мощность 1100W) + микшерный пульт Soundcraft epm8, микрофоны Shure sm58</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hall">
                        <h3>British Hall</h3>
                        <p className="square">Площадь 32 м<sup>2</sup></p>
                        <p>Оборудование:</p>
                        <ul>
                            <li>Гитарный комбоусилитель Fender Twin Reverb 85W 2х12</li>
                            <li>Гитарный комбоусилитель PEAVEY Classic 50W 1x12</li>
                            <li>Бассовый усилитель ASHDOWN MAG C410T-300 EVO II</li>
                            <li>Барабанная установка Mapex</li>
                            <li>Линия: активные акустические колонки Berenger b315 (общая мощность 1100W) + микшерный пульт Soundcraft epm8, микрофоны Shure sm58.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


