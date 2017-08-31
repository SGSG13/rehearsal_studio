import React, {Component} from 'react';
import { Grid, Row, Col} from 'react-bootstrap'
import AppBar from 'material-ui/AppBar';


class App extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title=""
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Grid>
                    <Row>
                        <Col md={12}>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}


export default App;
