import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
