import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT,
} from "../constants/userConstant";

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    const response = await fetch("https://badhaibazaarbackend.onrender.com/profile", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();
    dispatch({ type: FETCH_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await fetch("https://badhaibazaarbackend.onrender.com/logout", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to log out");
    }

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
