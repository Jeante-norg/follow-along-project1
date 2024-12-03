import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/auth/Login";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Login />
      </div>
    </>
  );
}

export default App;