import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Toaster } from "react-hot-toast";
import {useUserStore} from './stores/userStore'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import Profile from "./pages/Profile";


function App() {
  const [count, setCount] = useState(0);
  const user = localStorage.getItem("user-storage");
  if(!useUserStore.getState().user) {
    useUserStore.getState().fetchUserProfile();
  }

  return (
    
    <BrowserRouter>
    <Toaster/>
    <NavigationBar />
      <Routes>
        <Route path="/" element={!user?<Homepage />:<Main/>} />
        <Route path="/main" element={!user?<Homepage/>:<Main />} />
        <Route path="/profile" element={!user?<Homepage/>:<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
