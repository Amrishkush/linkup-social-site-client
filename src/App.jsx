import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProfilePage from "./pages/ProfilePage";
// import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [signIn, setSignIn] = useState(true);
  const [profileHeaderNav, setProfileHeaderNav] = useState({})
  return (
    <BrowserRouter>
      <div className="bg-orange-50 h-full">
        <Header setSignIn={setSignIn} profileHeaderNav={profileHeaderNav} setProfileHeaderNav={setProfileHeaderNav} />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home setSignIn={setSignIn} signIn={signIn}/>}
            />
            <Route
              path="/users/:username"
              element={<ProfilePage  setProfileHeaderNav={setProfileHeaderNav} />}
            />
          </Routes>
        </div>
        {/* <Home setSignIn={setSignIn} signIn={signIn}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
