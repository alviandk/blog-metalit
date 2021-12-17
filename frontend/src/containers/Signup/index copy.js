import React from "react";

import TextField from '@material-ui/core/TextField'; 
import FormControl from '@material-ui/core/FormControl'; 
import Button from '@material-ui/core/Button'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import InputLabel from '@material-ui/core/InputLabel'; 
import Input from '@material-ui/core/Input'; 
import InputAdornment from '@material-ui/core/InputAdornment'; 
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500
  },
  input: {
      color: 'white'
  }
});

const Signup = (props) => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    confirmPassword: '',
    showConfirmPassword: false,

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

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { classes } = props;

  return (
    <>
    <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap' }}>
    <Container>
      <Row>
        <Typography variant="h2" component="div" gutterBottom>
          DAFTAR
        </Typography>
      </Row>
      <form >
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField label="Nama Lengkap" variant="standard" required margin="dense"/>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
             <FormControl fullWidth sx={{ m: 1 }}>
              <TextField label="Email" variant="standard" type="email" required  margin="dense" 
              className={classes.root}
              InputProps={{
                className: classes.input
              }}/>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
             <FormControl fullWidth sx={{ m: 1 }}  margin="dense">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <Input
                id="field-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
             <FormControl fullWidth sx={{ m: 1 }}  margin="dense">
              <InputLabel htmlFor="outlined-adornment-password">Konfirmasi Sandi</InputLabel>
              <Input
                id="field-confirm-password"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Konfirmasi Sandi"
                />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 0 }} margin="dense">
            <Button variant="contained" color="primary">DAFTAR</Button>
          </Col>
        </Row>
      </form>
    </Container>    
    </Box>
  </>
  );
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);