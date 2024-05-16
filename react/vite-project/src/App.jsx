import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const slike = ["./slike/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"];

function Profile() {
  return <img src={slike[0]} />;
}

export default function App() {
  return <Profile />;
}
