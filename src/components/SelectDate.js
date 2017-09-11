import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


const styleB = {
    margin: 12,
    display: 'inline-block'
};

const styleP = {
    margin: 12,
    display: 'inline-block',
    width: 140
};


class SelectDate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            controlledDate: new Date()
        };
    }


    handleChange = (event, date) => {
        this.setState({
            controlledDate: date
        });
        let time =  date.getFullYear()+'-'+0+(date.getMonth()+ 1)+'-'+date.getDate();
        console.log(time)
    };

    render() {
        return (
                <div className="col-lg-6">
                    <RaisedButton label="Сегодня" style={styleB} />
                    <DatePicker
                        hintText="Controlled Date Input"
                        value={this.state.controlledDate}
                        onChange={this.handleChange}
                        autoOk
                        style={styleP}
                    />
                </div>
        );
    }
}



export default SelectDate;

