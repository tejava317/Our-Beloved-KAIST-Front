import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
