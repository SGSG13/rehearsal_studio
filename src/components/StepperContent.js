import React, {Component} from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import StepHalls from './StepHalls'
import StepDate from './StepDate'
import StepOrder from './StepOrder'

import {getUser} from '../AC'
import {getSlots} from '../AC'


import {LS} from '../utils'

class StepperContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            finished: false,
            stepIndex: 0,
        };

    }

    componentDidMount() {
        this.props.getUser();


        //  const slots = {
        //     small: [
        //         {
        //             date: '2017912',
        //             slots: ['1', '3']
        //         },
        //         {
        //             date: '2017913',
        //             slots: ['2']
        //         }
        //     ],
        //     big: [
        //         {
        //             date: '2017912',
        //             slots: ['1']
        //         }
        //     ]
        // };
        //
        // LS.set('slots', slots)
    }

    

    handleHalls = () => {
        const {getSlots} = this.props;
        getSlots(this.props.hall);
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

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <StepHalls/>;
            case 1:
                return <StepDate/>;
            case 2:
                return <StepOrder/>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    getButtonFunction(stepIndex){
        switch (stepIndex) {
            case 0:
                return this.handleHalls;
            case 1:
                return this.handleNext;
            case 2:
                return this.handleNext;
            default:
                return this.handleNext
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};

        return (
            <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Выбор зала</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Выбор даты и время</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Бронирование</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            <div>{this.getStepContent(stepIndex)}</div>
                            <div style={{marginTop: 30}}>
                                <FlatButton
                                    label="Назад"
                                    disabled={stepIndex === 0}
                                    onClick={this.handlePrev}
                                    style={{marginRight: 12}}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Бронировать' : 'Вперёд'}
                                    primary={true}
                                    onClick={this.getButtonFunction(stepIndex)}
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
      hall: state.order.hall
    }
}, {getUser, getSlots})(StepperContent)
