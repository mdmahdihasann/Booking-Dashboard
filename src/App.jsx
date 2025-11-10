import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ErrorElements from "./components/ErrorElements";
import DashboardCard from "./components/DashboardCard";
import Launch from "./components/pages/launch/Launch";
import LoginForm from "./components/form/LoginForm";
import RegisterForm from "./components/form/RegisterForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<DashboardCard />} />
            <Route path="/launch" element={<Launch />} />
          </Route>
          <Route path="*" element={<ErrorElements />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
