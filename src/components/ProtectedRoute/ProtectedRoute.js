import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, ...props }) {
  return props.loggedIn || props.isUser ? children : (<Navigate replace={true} to="/" />);
};
