import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login Successfully !!!");
        navigate("/main")
    }

    return (
        <Button onClick={handleLogin}>Login</Button>
    )
}

export default Login