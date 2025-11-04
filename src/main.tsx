import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DesignUpload, Login, Portfolio, Waitlist } from "./components";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/designUpload" element={<DesignUpload />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);
