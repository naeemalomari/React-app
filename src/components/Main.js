import React from 'react';
import HornedBeasts from './HornedBeasts';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import Data from './data.json';

class Main extends React.Component {
    constructor(props){
        super(props);
            this.state={

        }
    }
    render() {
                const display = Data.map( element => {
                    return (
            <Col lg={2}>
                <HornedBeasts
                    className="card"
                    title={element.title}
                    image_url={element.image_url}
                    description={element.description}
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