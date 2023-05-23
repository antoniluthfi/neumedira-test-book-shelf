"use client";

import { createSession } from "@/utils/auth";
import { getCookie } from "@/utils/cookie";
import React, { createContext, useEffect, useReducer, useState } from "react";

const initialState = {
  data: {
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
    token: null,
  },
  isLoading: false,
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case "LOGIN_SUCCESS":
      return {
        data: {
          id: action.payload?.id,
          username: action.payload?.username,
          email: action.payload?.email,
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          gender: action.payload?.gender,
          image: action.payload?.image,
          token: action.payload?.token,
        },
        isLoading: false,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        data: {
          id: null,
          username: null,
          email: null,
          firstName: null,
          lastName: null,
          gender: null,
          image: null,
          token: null,
        },
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AppContext = createContext({
  auth: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialState);
  const [searchBookKeyword, setSearchBookKeyword] = useState("");
  const token = getCookie("token") || sessionStorage.getItem("token");

  const authenticateUser = () => {
    try {
      dispatch({ type: "LOGIN_LOADING" });

      if (token) {
        const username =
          getCookie("username") || sessionStorage.getItem("username");
        const email = getCookie("email") || sessionStorage.getItem("email");
        const password =
          getCookie("password") || sessionStorage.getItem("password");
        const firstName =
          getCookie("firstName") || sessionStorage.getItem("firstName");
        const lastName =
          getCookie("lastName") || sessionStorage.getItem("lastName");
        const gender = getCookie("gender") || sessionStorage.getItem("gender");
        const image = getCookie("image") || sessionStorage.getItem("image");

        const payload = {
          id: 15,
          username,
          email,
          firstName,
          lastName,
          gender,
          image,
          token,
        };

        createSession({ ...payload, password });
        dispatch({
          type: "LOGIN_SUCCESS",
          payload,
        });
      } else {
        throw new Error("Login Failed");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED" });
      // alert(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, [token]);

  return (
    <AppContext.Provider
      value={{ auth, searchBookKeyword, setSearchBookKeyword, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};
