import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: 'red'
                    }}
                                    ></div>;


export default class Map extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    render() {
        return (
            <div style={{height: 400}}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    bootstrapURLKeys={{
                key: 'AIzaSyBbp3BpE6Rlcbfh9uXGQcOtb02VTm5r_-4',
                language: 'ru'}}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}