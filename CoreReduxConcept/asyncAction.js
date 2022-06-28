const Redux = require("redux");

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSucess = () => {
  return {
    type: FETCH_USER_SUCESS,
    payload: "here comes the user data if the user is found",
  };
};

const fetchUserError = () => {
  return {
    type: FETCH_USER_FAILURE,
    payload: "some kind of error if  we get",
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCESS:
      return {
        loading: false,
        user: payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
  }
};

const store = Redux.createStore(reducer);
