import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import ActionRoom from 'material-ui/svg-icons/action/room'
import {red500} from 'material-ui/styles/colors';
import './map.sass'

const Marker = () => <ActionRoom
                        color={red500}
                    />;

export default class Map extends Component {

    static defaultProps = {
        center: {lat: 53.903330, lng: 30.336368},
        zoom: 17
    };

    render() {
        return (
            <div style={{height: 400}}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    bootstrapURLKeys={{
                    key: 'AIzaSyBbp3BpE6Rlcbfh9uXGQcOtb02VTm5r_-4',
                    language: 'ru'
                                    }}
                >
                    <Marker
                        lat={53.903330}
                        lng={30.336368}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}