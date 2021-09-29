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

async function loginUser(credentials) {
  return fetch('http://localhost:4001/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({ onLogin, setToken }) {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password
    });
    console.log(data.token)
    setToken(data.token);
  }

  return (
    <Row>
      <Col md="4" className="offset-md-4">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5" className="text-center">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
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
                    onClick={onLogin}
                  >
                    Sign In
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
