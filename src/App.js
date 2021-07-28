import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import "./App.css";
import DataArr from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
import FormInfo from "./components/formInfo";
import { Form } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      url: '',
      description: '',
      horns:'',
      data:DataArr,
    };
  }

  numOfHorns=(numberHorns)=>{
 let newArray=DataArr.filter((element) => {
   if(element.horns === Number(numberHorns)){
     return element;
   }else {return element} });
 this.setState({data:newArray});
  }


  modalData = (title, image_url, description,horns) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
      horns:horns
    });
  };

  stateHandleShow = () => {
    this.setState({
      show: true,
    });
  };

  stateHandleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <Container fluid align="center">
        <Row>
          <Col>
            <Header />
            <Form handleSubmission={this.dataHandle} />
          </Col>
        </Row>
        <Row>
          <SelectedBeast
            show={this.state.show}
            hide={this.stateHandleHide}
            title={this.state.title}
            image_url={this.state.image_url}
            description={this.state.description}
            // horns={this.state.horns}
          />
          <Main
            data={this.state.data}
            stateUpdate={this.stateHandleShow}
            modalData={this.modalData}
          />
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;