import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUserAction } from "@/redux/feature/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(formData)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        // console.log("loginData: ", data);
        toast.success(data?.payload?.message);
        navigate("/shop/home");
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl text-foreground font-bold tracking-tight">
          Login To Your Account!!!
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/register"}
          >
            Register
          </Link>
        </p>
      </div>

      <CommonForm
        buttonText={"Sign In"}
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        onSubmit={submitForm}
      />
    </div>
  );
};

export default AuthLogin;
