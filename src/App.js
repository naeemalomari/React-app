import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import './App.css';
import SelectedBeast from './components/SelectedBeast';
import Data from './components/data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      imageUrl: '',
      description: '',
      modalState: false,
    };
  }


  handler = (title, image_url, description, modalState) => {
      this.setState({
        title: title,
        image_url: image_url,
        description: description,
        modalState: modalState,
      });
  };

  handelModalShow = modalState =>{
      this.setState({
        modalState: modalState
      });
  }

  render() {
    return (
      <>
       <SelectedBeast 

       title={this.state.title}
       imageUrl={this.state.imageUrl}
       description={this.state.description}
       showModal={this.state.modalState}
       hideModal={this.handelModalShow}

      
      
      
      />
      <Container fluid align="center">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Main
          beastlist={Data}
          handler={this.handler} />
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
        </>
    );
  }
}
export default App;