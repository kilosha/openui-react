import { useState } from "react";
import "./App.css";

import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import reactLogo from "./assets/reactLogo.png";
import profilePictureExample from "./assets/profilePictureExample.png";
import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { MyCustomElement } from "./MyCustomElement";

function App() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("./");
    };
    return (
        <>
            <ShellBar
                primaryTitle="My App"
                logo={<img src={reactLogo} alt="Company Logo" />}
                profile={
                    <Avatar>
                        <img src={profilePictureExample} alt="User Avatar" />
                    </Avatar>
                }
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon={activateIcon} text="Activate" />
            </ShellBar>
            <MyCustomElement />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </>
    );
}

export default App;
