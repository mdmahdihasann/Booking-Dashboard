import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ErrorElements from "./components/ErrorElements";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<ErrorElements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
