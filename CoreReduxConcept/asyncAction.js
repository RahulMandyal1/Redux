const Redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;
const applyMiddelware = Redux.applyMiddleware;

const initialState = {
  loading: false,
  users: null,
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCESS = "FETCH_USERS_SUCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSucess = (userData) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: userData,
  };
};

const fetchUserError = (errorMessage) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errorMessage,
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCESS:
      return {
        loading: false,
        users: payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: null,
        error: payload,
      };
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        // if  we recieve any kind of {data} then we have to dispatch an action from here
        const users = data.map((user) => user.username);
        dispatch(fetchUserSucess(users));
      })
      .catch((error) => {
        dispatch(fetchUserError(error.message));
      });
  };
};

const store = Redux.createStore(reducer, applyMiddelware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());
