import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const loggedUser ={
            email: user.email
        };
        fetch("http://localhost:3000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loggedUser),
          })
          .then(res => res.json())
          .then(data => {
            console.log("jwt response",data);
          })
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 2000,
          title: "Login Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Maybe your email and Password incorrect",
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 border rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className={`w-96 p-2 mt-1 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">email name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className={`w-96 p-2 mt-1 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">password is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>

        <div className="mt-5 text-center">
          <span>
            Don't have an account{" "}
            <Link className="text-blue-400" to="/sign-up">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
