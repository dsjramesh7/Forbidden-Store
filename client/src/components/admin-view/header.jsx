import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/feature/auth-slice";

const AdminHeader = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    console.log("daf");
    dispatch(logoutUser());
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button>
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow cursor-pointer">
          <LogOut onClick={handleLogout} />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
