const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
      };
    case "REGISTRATION_START":
        return {
            user: null,
            isFetching: true,
        };
    case "REGISTRATION_SUCCESS":
        return {
            user: action.payload,
            isFetching: false,
        };
    case "REGISTRATION_FAILURE":
        return {
            user: null,
            isFetching: false,
        };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default Reducer;
