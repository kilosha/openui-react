import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
    Avatar,
    Button,
    ShellBar,
    ShellBarItem
} from "@ui5/webcomponents-react";

import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import group from "@ui5/webcomponents-icons/dist/group.js";

import Home from "./pages/Home";
import MyTeamPage from "./pages/MyTeamPage";
import Detail from "./pages/Detail";
import EmployeeDetailPage from "./pages/EmployeeDetailPage";

import reactLogo from "./assets/reactLogo.png";
import profilePictureExample from "./assets/profilePictureExample.png";

import "./App.css";

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
                startButton={
                    <>
                        <Button
                            accessibleName="MyTeam"
                            icon={group}
                            tooltip="My Team"
                            onClick={() => {
                                navigate("./employees");
                            }}
                        />
                    </>
                }
            >
                <ShellBarItem icon={activateIcon} text="Activate" />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/employees" element={<MyTeamPage />} />
                <Route
                    path="/employeeDetail/:employeeId"
                    element={<EmployeeDetailPage />}
                />
                <Route path="/detail" element={<Detail />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </>
    );
}

export default App;
