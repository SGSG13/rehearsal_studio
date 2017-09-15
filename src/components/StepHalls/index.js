import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Paper from 'material-ui/Paper'
import {setHall, getUser} from '../../AC'

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

    static propTypes = {
        // from connect
        hall: PropTypes.string.isRequired,
        setHall: PropTypes.func.isRequired,
        getUser: PropTypes.func.isRequired
    };

    selectHall = (ev, val) => {
        this.props.setHall(val);
    };

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div>
                <Paper style={stylePaper1} zDepth={2} />
                <Paper style={stylePaper2} zDepth={2} />
                <RadioButtonGroup name="select halls" onChange = {this.selectHall} defaultSelected={this.props.hall}>
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

export default connect((state) => {
    return {
        hall: state.order.hall
    }
}, {setHall, getUser})(StepHalls)
