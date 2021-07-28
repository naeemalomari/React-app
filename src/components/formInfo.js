import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

class FormInfo extends React.Component{
    createForm =(event) => {
        event.preventDefault();
        this.setState({
            name:event.target.name.value,
        });
    }


render() {
    return (
        <>
<Form >
    <p> How Many Horns ? </p>
<Form.Select aria-label="Default select example">
  <option> All </option>
  <option value="1" name='first'>One</option>
  <option value="2" name='second'>Two</option>
  <option value="3" name='third'>Three</option>
  <option value="100" name='fourth'> Wow </option>

</Form.Select>
<br></br>
</Form>

</>
    )
}
}
export default FormInfo;