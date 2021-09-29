import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

async function addRecipe(data, header) {
  return fetch('http://localhost:4001/recipe/create', {
    method: 'POST',
    headers: header,
    body: JSON.stringify(data)
  })
    .then(data => console.log(data.json()))
 }

function AddRecipe(props) {
  const [name, setName] = useState(0);
  const [description, setDescription] = useState(0);
  const [category, setCategory] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    const header = {'x-access-token':userToken, 'Content-Type': 'application/json'}
    const data = await addRecipe({
      name,
      description,
    }, header);
    console.log(data)
    // setToken(data.token);
  }

  return (
    <Row>
      <Col md="4" className="offset-md-4">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5" className="text-center">
              Add Recipe
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Recipe Name</label>
                    <Input placeholder="Enter recipe name" type="text" onChange={e => setName(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                  <label for="category">Select Category</label>
                    <Input type="select" name="category" id="category" onChange={e => setCategory(e.target.value)}>
                      <option value='breakfast'>Breakfast</option>
                      <option value='lunch'>Lunch</option>
                      <option value='dinner'>Dinner</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label for="description">Description</label>
                    <Input type="textarea" placeholder='Enter description' name="desciption" id="description" onChange={e => setDescription(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="ml-auto mr-auto d-flex justify-content-center">
                  <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Add Recipe
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}


export default AddRecipe;
