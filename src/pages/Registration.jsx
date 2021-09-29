import React, { useState, useEffect } from 'react';
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

async function userRegistration(credentials) {
  return fetch('http://localhost:4001/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Registration(props) {
  const [fname, setFname] = useState(0);
  const [lname, setLname] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await userRegistration({
      first_name: fname,
      last_name: lname,
      email,
      password,
    });
    console.log(data.token)
    props.history.push('/register')
  }

  return (
    <Row>
      <Col md="4" className="offset-md-4">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5" className="text-center">
              Sign up
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <label>First Name</label>
                    <Input placeholder="First name" type="text" onChange={e => setFname(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Last Name</label>
                    <Input placeholder="Last Name" type="text" onChange={e => setLname(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Email</label>
                    <Input placeholder="email" type="email" onChange={e => setEmail(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Password</label>
                    <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)}/>
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
                    Register
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


export default Registration;
