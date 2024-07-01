import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpUser, updateUserInfo } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    signUpUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedUser);

      updateUserInfo(data.name, data.photo)
        .then(() => {
          const userInfo = {
            displayName: data.name,
            email: data.email,
            photoURL: data.photo,
            role: 'user'
          };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                navigate(from, { replace: true });
                Swal.fire({
                  showConfirmButton: false,
                  timer: 2000,
                  title: "Login Successful",
                  icon: "success",
                });
              }
            });
        })
        .catch((error) => console.log(error.message));
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
            {...register("Password", { required: true })}
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
          login
        </button>

        <div>
            <span>Already have an account <Link>Login</Link></span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
