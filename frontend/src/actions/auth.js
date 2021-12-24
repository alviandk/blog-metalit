
import {defaultActionCreator} from "./actionCreator";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const loginRequest = defaultActionCreator(LOGIN_REQUEST, 'data')
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = defaultActionCreator(LOGIN_SUCCESS,  'data')
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = defaultActionCreator(LOGIN_ERROR, 'error')

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const logoutRequest = defaultActionCreator(LOGOUT_REQUEST, )
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const logoutSuccess = defaultActionCreator(LOGOUT_SUCCESS,  'data')
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const logoutError = defaultActionCreator(LOGOUT_ERROR, 'error') 

export const RESET_AUTH = 'RESET_AUTH'
export const resetAuth = defaultActionCreator(RESET_AUTH, 'error') 