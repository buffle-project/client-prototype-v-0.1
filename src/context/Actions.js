export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const RegisterStart = () => ({
    type: "REGISTRATION_START",
});

export const RegisterFailure = () => ({
    type: "REGISTRATION_FAILURE",
});

export const RegisterSuccess = (user) => ({
    type: "REGISTRATION_SUCCESS",
    payload: user,
});
