import React from 'react';
import HornedBeasts from './HornedBeasts';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, NavItem, Row } from "react-bootstrap";
import Data from './data.json';
// import SelectedBeast from './SelectedBeast';
class Main extends React.Component {

    render() {
            
        const display = Data.map(element => {
            return (

                <Col lg={4}>
                    <HornedBeasts
                        className="card"
                        key={element.title.toString()}
                        title={element.title}
                        image_url={element.image_url}
                        description={element.description}
                        handler={this.props.handler}
                    />
                </Col>
            );
        });
        return (
            <div>
                {display}
            </div>);
    }
}

export default Main;