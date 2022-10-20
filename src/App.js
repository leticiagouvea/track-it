import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Login from "./pages/LoginPage/Login";
import Registration from "./pages/Registration/Registration";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}