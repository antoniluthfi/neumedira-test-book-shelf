"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";

export default function Login() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat w-full h-full flex justify-center align-middle">
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

        <form className="mt-[42px]">
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
            />
          </div>

          <PasswordInput />

          <div className="flex justify-between mt-[50px]">
            <div>
              <input
                id="remember-me"
                type="checkbox"
                name="remember_me"
                className="mr-2 h-4 w-4 rounded border-gray-300 bg-[#DF7D3A] focus:ring-0 focus:ring-offset-0"
                defaultChecked={checked}
                onChange={() => setChecked((prev) => !prev)}
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
            className="w-full h-12 bg-[#FA7C54] hover:bg-[#d87557] mt-[42px] text-white rounded-lg"
          >
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
