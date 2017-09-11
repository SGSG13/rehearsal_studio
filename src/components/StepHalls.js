import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
import {getSlots} from '../AC'

const styles = {
    radioButton: {
        marginBottom: 16,
        display: 'inline-block',
        width: '50%'
    }
};

const stylePaper1 = {
    height: 300,
    width: "47%",
    margin: 20,
    marginLeft: 0,
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage: 'url(img/1.jpg)'
};


const stylePaper2 = {
    height: 300,
    width: "47%",
    margin: 20,
    marginRight: 0,
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage: 'url(img/2.jpg)'
};


class StepHalls extends Component {

    render() {
        return (
            <div>
                <Paper style={stylePaper1} zDepth={2} />
                <Paper style={stylePaper2} zDepth={2} />
                <RadioButtonGroup name="select halls" onChange = {this.props.selectHall} defaultSelected={this.props.default}>
                    <RadioButton
                        value="big"
                        label= "Большой зал"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="small"
                        label="Малый зал"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}

export default StepHalls
