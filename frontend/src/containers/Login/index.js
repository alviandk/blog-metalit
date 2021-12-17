import React, { Fragment, useState, useRef } from "react";
import Message from "../../components/Message";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import history from "../../history/history";
import "../../styles.css";

const styles = {
  root: {
    background: "white",
  },
  input: {
    color: "black",
  },
};

const Login = (props) => {
  const { classes } = props;
  const [acookies, setACookie] = useCookies(["access_token"]);
  const [rcookies, setRCookie] = useCookies(["refresh_token"]);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    message: "",
    error: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.append('email', values.email);
    bodyFormData.append('password', values.password);
    
    axios.post(`http://localhost:8089/api/login`,  
      bodyFormData, 
      {
        'Origin': 'http://localhost:3000',
        'Content-Type': 'multipart/form-data',
      })
      .then(function (response) {
        //handle success
        if (response.status == 200) {
          var atoken = response.data.access_token;
          var rtoken = response.data.refresh_token;
          setACookie("access_token", atoken, {
            path: "/"
          });
          setRCookie("refresh_token", rtoken, {
            path: "/"
          });
          history.push("/dashboard");
        }

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });  
  };
  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {values.message ? (
                <Message variant="info" msg={values.message} />
              ) : null}
              {values.error ? (
                <Message variant="danger" msg={values.error} />
              ) : null}
              <div className="biru">
                <Form className="py-5 px-5" onSubmit={onSubmit}>
                  <h3 className="mb-5 text-center text-white">LOGIN</h3>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="4">
                      Email
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        onChange={handleChange('email')}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="4">
                      Password
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        style={{ color: 'white' }}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </Form.Label>
                    <Col sm="8" > 
                      <Form.Control 
                        type={values.showPassword ? "text" : "password"}
                        placeholder="Password"
                        // id="password"
                        onChange={handleChange('password')}
                      />
                    </Col>
                  </Form.Group>
                    <Row className="justify-content-end">
                      <Col  md="auto">
                        <button className="btn btn-light">MASUK</button>
                      </Col>
                    </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Login));
