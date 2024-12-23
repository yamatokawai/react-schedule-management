import React, { useState } from "react";

interface LoginInformation {
  email: string;
  password: string;
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInformation>({ email: "", password: "" });

  const handleInputChange = (key: "email" | "password", value: string) => {
    setLoginInfo((prev) => ({
      ...prev, // 既存の値を保持
      [key]: value, // 変更するプロパティのみ更新
    }));
  };

  const submitLoginInfo = () => {
    console.log(loginInfo);
  };

  return (
    <div className="h-lvh flex justify-center items-center">
      <div className="bg-neutral-100 h-1/2 w-1/3 rounded">
        <div className="h-full flex justify-center items-center flex-col">
          <div className="w-2/3">
            <p>Email</p>
            <input
              type="text"
              placeholder="email"
              className="px-2 w-full mt-2"
              onChange={(e) => handleInputChange("email", e.target.value)} // emailを更新
            />
          </div>
          <div className="h-3"></div>
          <div className="w-2/3">
            <p>Password</p>
            <input
              type="password"
              placeholder="password"
              className="px-2 w-full mt-2"
              onChange={(e) => handleInputChange("password", e.target.value)} // passwordを更新
            />
          </div>
          <div className="h-7"></div>
          <button className="bg-indigo-600 py-3 w-2/3 rounded-lg text-white" onClick={submitLoginInfo}>
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
