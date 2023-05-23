import React, { useState } from "react";
import EyeSlashIcon from "~/icons/eye-slash.svg";
import EyeIcon from "~/icons/eye.svg";

export default function PasswordInput({ value, onChange, disabled }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-6">
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <div className="h-14 w-full flex justify-between items-center rounded-lg border-[1px] border-[#DCD9D9]">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="h-full px-4 focus:outline-none basis-[90%]"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="basis-[10%] flex justify-center"
        >
          {showPassword ? (
            <EyeSlashIcon fill="#8A8A8A" />
          ) : (
            <EyeIcon fill="#8A8A8A" />
          )}
        </button>
      </div>
    </div>
  );
}
