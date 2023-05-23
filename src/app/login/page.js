"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";
import { login } from "@/utils/auth";
import { AppContext } from "@/context/AppContext";
import { getCookie } from "@/utils/cookie";

export default function Login() {
  const { auth, dispatch } = useContext(AppContext);
  const username = "kminchelle";
  // "email": "kminchelle@qq.com",
  // "password": "0lelplR"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const token = getCookie("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_LOADING" });

    const res = await login({ username, password, rememberMe: checked });

    if (res?.id) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          ...res,
        },
      });
    } else {
      dispatch({
        type: "LOGIN_FAILED",
      });
    }
  };

  useEffect(() => {
    if (token) {
      setEmail(getCookie("email"));
      setPassword(getCookie("password"));
    }
  }, [token]);

  return (
    <div className="flex justify-center align-middle">
      <div className="w-[565px] bg-white shadow-xl rounded-[10px] my-[50px] p-10">
        <Image
          src="/images/login-logo.png"
          width={150}
          height={93}
          alt="Login logo"
          loading="lazy"
          className="self-center mx-auto"
        />

        <p className="text-center mt-[63px] text-[#4D4D4D] text-[20px] leading-6">
          Welcome Back !
        </p>
        <p className="text-center mt-[15px] text-[#ABABAB] text-[15px]">
          Sign in to continue to yourDigital Library
        </p>

        <form className="mt-[42px]" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              className="h-14 w-full rounded-lg border-[1px] border-[#DCD9D9] px-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={auth.isLoading}
            />
          </div>

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={auth.isLoading}
          />

          <div className="flex justify-between mt-[50px]">
            <div>
              <input
                id="remember-me"
                type="checkbox"
                name="remember_me"
                className="mr-2 h-4 w-4 rounded border-gray-300 bg-[#DF7D3A] focus:ring-0 focus:ring-offset-0"
                defaultChecked={checked}
                onChange={() => setChecked((prev) => !prev)}
                disabled={auth.isLoading}
              />
              <label htmlFor="remember-me" className="text-[#4D4D4D] text-base">
                Remember Me
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="text-base text-[#4D4D4D] underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#FA7C54] hover:bg-[#d87557] mt-[42px] text-white rounded-lg flex justify-center items-center"
          >
            {auth.isLoading && (
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Login
          </button>

          <div className="flex justify-between mt-[63px] mb-20">
            <span className="text-base text-[#4D4D4D] ">
              New User?{" "}
              <Link href="/register" className="underline">
                Register Here
              </Link>
            </span>

            <Link href="/" className="text-base text-[#4D4D4D]">
              Use as Guest
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
