import * as auth from "../actions/auth";

const initialState = {
  data: {},
  isLoading: null,
  isFetching: null,
  isError: null,
  message: null,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case auth.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case auth.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.error,
      };

    case auth.RESET_AUTH:
      return {
        data: {},
        isLoading: null,
        isFetching: null,
        isError: null,
        message: null,
      };
    case auth.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case auth.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case auth.LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.error,
      };
    default:
      return state;
  }
}
