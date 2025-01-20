import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    console.log("User logged out");
    navigate("/login");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Main Page</h1>
      <p>Welcome, {auth.currentUser?.displayName}</p>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Log out
      </button>
    </div>
  );
};

export default MainPage;
