import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes/types";
import api from "../../api/api";
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT
});
export const login = credentials => dispatch => {
  return api.user.login(credentials).then(user => {
    localStorage.appJWT = user.token;
    dispatch(userLoggedIn(user));
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem("appJWT");
  dispatch(userLoggedOut());
  // return api.user.login(credentials).then(user => {
  //   localStorage.appJWT = user.token;
  //   dispatch(userLoggedIn(user));
  // });
};
