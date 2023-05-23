import axios from "axios";
import { deleteCookie, setCookie } from "./cookie";

export async function login({ username, password, rememberMe }) {
  try {
    const res = await axios.post("/api/login", {
      username,
      password,
    });

    if (res.status !== 200) {
      throw new Error("Login Failed");
    }

    if (rememberMe) {
      setCookie("id", res.data?.id, 1);
      setCookie("username", res.data?.username, 1);
      setCookie("password", res.data?.password, 1);
      setCookie("email", res.data?.email, 1);
      setCookie("firstName", res.data?.firstName, 1);
      setCookie("lastName", res.data?.lastName, 1);
      setCookie("gender", res.data?.gender, 1);
      setCookie("image", res.data?.image, 1);
      setCookie("token", res.data?.token, 1);
    }

    createSession(res.data);

    return res.data;
  } catch (error) {
    alert(error);
    return false;
  }
}

export function logout(cb) {
  deleteCookie("id");
  deleteCookie("username");
  deleteCookie("password");
  deleteCookie("email");
  deleteCookie("firstName");
  deleteCookie("lastName");
  deleteCookie("gender");
  deleteCookie("image");
  deleteCookie("token");
  sessionStorage.clear();
}

export function createSession(data) {
  sessionStorage.setItem("id", data?.id);
  sessionStorage.setItem("username", data?.username);
  sessionStorage.setItem("password", data?.password);
  sessionStorage.setItem("email", data?.email);
  sessionStorage.setItem("firstName", data?.firstName);
  sessionStorage.setItem("lastName", data?.lastName);
  sessionStorage.setItem("gender", data?.gender);
  sessionStorage.setItem("image", data?.image);
  sessionStorage.setItem("token", data?.token);
}
