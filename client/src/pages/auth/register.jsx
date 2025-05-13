import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { registerUserAction } from "@/redux/feature/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  // console.log("FormDataRegister", formData);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(formData)).then((data) => {
      if (data?.payload?.success) {
        // console.log("Data: ", data);
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      } else {
        console.log(data);
        toast.error(data?.payload?.message);
      }
    });
  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl text-foreground font-bold tracking-tight">
          Create New Account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/login"}
          >
            Login
          </Link>
        </p>
      </div>

      <CommonForm
        buttonText={"Sign Up"}
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        onSubmit={submitForm}
      />
    </div>
  );
};

export default AuthRegister;
