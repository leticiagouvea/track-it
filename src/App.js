import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Login from "./pages/LoginPage/Login";
import Registration from "./pages/Registration/Registration";
import HabitsPage from "./pages/Habits/HabitsPage";
import Today from "./pages/Habits/Today";
import Historic from "./pages/Historic/Historic";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}