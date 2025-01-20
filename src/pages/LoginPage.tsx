import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            const user = result.user;
            console.log("Logged in user:", user);

            navigate("/main");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to My App</h1>
            <button
                onClick={handleGoogleLogin}
                style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
            >
                Sign in with Google
            </button>
        </div>
    );
};

export default LoginPage;
