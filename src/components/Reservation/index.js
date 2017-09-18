import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import StepHalls from './StepHalls'
import StepDate from './StepDate'
import StepOrder from './StepOrder'
import {getSlots, reserv} from '../../AC'
import './index.sass'

class Reservation extends Component {

    static propTypes = {
        // from connect
        hall: PropTypes.string.isRequired,
        slots: PropTypes.array.isRequired,
        band: PropTypes.string,
        phone: PropTypes.string,
        order: PropTypes.object.isRequired,
        getSlots: PropTypes.func.isRequired,
        reserv: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0
        };
    }

    handleHalls = () => {
        const {getSlots, hall} = this.props;
        getSlots(hall);
        this.handleNext();
    };

    handleOrder = () => {
        this.props. reserv();
        this.handleNext();
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    disableButton = (stepIndex, slots, band, phone, order) => {
        switch (stepIndex) {
            case 1:
                return (!slots.length) ? false : true;
            case 2:
                return (band === '' || phone === '' || (order.slots.length < 1)) ? false : true;
            default:
                return true
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <StepHalls/>;
            case 1:
                return <StepDate/>;
            case 2:
                return <StepOrder/>;
            default:
                return <StepHalls/>;
        }
    }

    getButtonFunction(stepIndex){
        switch (stepIndex) {
            case 0:
                return this.handleHalls;
            case 1:
                return this.handleNext;
            case 2:
                return this.handleOrder;
            default:
                return this.handleNext
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const {slots, band, phone, order} = this.props;

        return (
            <div className="container">
                <h2 className="title-page">Бронирование</h2>
                <div className="wrap-head-step">
                    <Stepper activeStep={stepIndex} className="123">
                        <Step className="head-step">
                            <StepLabel>Выбор зала</StepLabel>
                        </Step>
                        <Step className="head-step">
                            <StepLabel>Выбор даты и время</StepLabel>
                        </Step>
                        <Step className="head-step">
                            <StepLabel>Бронирование</StepLabel>
                        </Step>
                    </Stepper>
                </div>
                <div className="step-content">
                    {finished ? (
                        <div className="order-success">
                            <h3>Ваш заказ забронирован</h3>
                            <RaisedButton
                                label='Забронировать ещё'
                                primary={true}
                                onClick={() => {
                                    this.setState({stepIndex: 0, finished: false});
                                 }}
                            />
                        </div>
                    ) : (
                        <div>
                            <div>{this.getStepContent(stepIndex)}</div>
                            <div className="order-buttons">
                                <FlatButton
                                    label="Назад"
                                    disabled={stepIndex === 0}
                                    onClick={this.handlePrev}
                                    className="back-button"
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Бронировать' : 'Вперёд'}
                                    primary={true}
                                    onClick={this.getButtonFunction(stepIndex)}
                                    disabled = {this.disableButton(stepIndex, slots, band, phone, order) ? false : true}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export default connect((state) => {
    return {
        hall: state.order.hall,
        slots: state.order.slots,
        band: state.user.band,
        phone: state.user.phone,
        order: state.order
    }
}, {getSlots, reserv})(Reservation)
