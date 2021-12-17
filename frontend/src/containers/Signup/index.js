import React, { Fragment, useState, useRef } from "react";
import Message from "../../components/Message";
import axios from "axios";
import "../../styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, FormControl, Form } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";

// import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useCookies } from "react-cookie";
// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "@reach/router";
import { useHistory } from 'react-router-dom';



const styles = {
  root: {
    background: "white",
  },
  input: {
    color: "black",
  },
};

const Signup = (props) => {
  const { classes } = props;
  const [acookies, setACookie] = useCookies(["access_token"]);
  const [rcookies, setRCookie] = useCookies(["refresh_token"]);
  // const navigate = useNavigate();
  // const goToOtherPage = () => navigate('/daftar', { replace: true });
  let history = useHistory();


  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    message: "",
    error: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = (prop) => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
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
    bodyFormData.append('confirm_password', values.confirmPassword);
    bodyFormData.append('name', values.nama);
    
    console.log(bodyFormData);
    // Display the key/value pairs
    for (var pair of bodyFormData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    // axios.post(`http://localhost:8089/api/login`,  
    //   bodyFormData, 
    //   {
    //     'Origin': 'http://localhost:3000',
    //     'Content-Type': 'multipart/form-data',
    //   })
    //   .then(function (response) {
    //     //handle success
    //     // console.log(response);
    //     // console.log(response.data);
    //     if (response.status == 200) {
    //       var atoken = response.data.access_token;
    //       var rtoken = response.data.refresh_token;
    //       // localStorage.setItem('access_token', atoken);
    //       // localStorage.setItem('refresh_token', rtoken);
    //       setACookie("access_token", atoken, {
    //         path: "/"
    //       });
    //       setRCookie("refresh_token", rtoken, {
    //         path: "/"
    //       });
    //       // history.push("/daftar");
    //       history.push('/')
    //     }

    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });  
  };
  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-6">
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
                  <h3 className="mb-5 text-center text-white">REGISTRASI</h3>
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
                        type="email"
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
                      Nama
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="text"
                        placeholder="Nama"
                        onChange={handleChange('nama')}
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
                        onChange={handleChange('password')}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-4"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="4">
                      Konfirmasi Password
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        style={{ color: 'white' }}
                      >
                        {values.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </Form.Label>
                    <Col sm="8" > 
                      <Form.Control 
                        type={values.showConfirmPassword ? "text" : "password"}
                        placeholder="Konfirmasi Password"
                        onChange={handleChange('confirmPassword')}
                      />
                    </Col>
                  </Form.Group>
                    <Row className="justify-content-end">
                      <Col  md="auto">
                        <button className="btn btn-light">DAFTAR</button>
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

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
