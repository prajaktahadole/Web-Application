import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Auth/SignIn";
import { SingUp } from "../Auth/SingUp";
import { Navbar } from "../Navigation/Navbar";


export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        {" "}
        <Routes>
          <Route path="/" element={<SingUp />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </div>
    </div>
  );
};
