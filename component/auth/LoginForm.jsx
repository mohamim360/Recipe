"use client";

import { useState } from "react";
import { performLogin } from "@/app/actions";

import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState("");
	const { setAuth } = useAuth();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
