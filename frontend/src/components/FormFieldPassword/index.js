import React from "react";

import FormControl from '@material-ui/core/FormControl'; 
import OutlinedInput from '@material-ui/core/OutlinedInput'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import InputAdornment from '@material-ui/core/InputAdornment'; 
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FormFieldPassword = ({ label, password, showPassword, handleChange, handleClickShowPassword, handleMouseDownPassword }) => {
    
    return(
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={handleChange}
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label={password}
            />
    </FormControl>
    )
}

export default FormFieldPassword;