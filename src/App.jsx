import { Navigate, Route, Routes } from "react-router-dom";
import { TweetsPage } from "./pages/TweetsPage/TweetsPage";
import { Homepage } from "./pages/Homepage/Homepage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
