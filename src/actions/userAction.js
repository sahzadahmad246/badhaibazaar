import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT,
} from "../constants/userConstant";

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    const response = await axios.get("https://badhaibazaarbackend.onrender.com/profile", {
      withCredentials: true, // Include cookies in the request
    });

    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.user });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.response?.data?.message || error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://badhaibazaarbackend.onrender.com/logout",
      {
        withCredentials: true, // Include cookies in the request
      }
    );

    if (!response.data.success) {
      throw new Error("Failed to log out");
    }

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
