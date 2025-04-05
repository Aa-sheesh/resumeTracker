import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Toaster } from "react-hot-toast";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <BrowserRouter>
    <Toaster/>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
