import React, { Component } from "react";
import UserContext from "./userContext";
import { useContext } from "react";
import CartContext from "./cartContext";

export default function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log("context", userContext);
  return (
    <div>Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}</div>
  );
}
