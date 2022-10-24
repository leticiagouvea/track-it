import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import HabitsPage from "./pages/Habits/HabitsPage";
import TodayPage from "./pages/Today/TodayPage";
import Historic from "./pages/Historic/Historic";
import userContext from "./context/userContext";
import { useState } from "react";

export default function App() {
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ todayHabits, setTodayHabits }}>

        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>

      </userContext.Provider>
    </BrowserRouter>
  );
}