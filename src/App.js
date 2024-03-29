import "./App.css";
import Authentication from "./pages/authentication/Authentication";
import HomePage from "./pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import TrainingPage from "./pages/trainingPage/TrainingPage";
import Exercises from "./pages/exercises/Exercises";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route
          path="/training/category/:categoryId/exercises/:exercisesId"
          element={<Exercises />}
        />
      </Routes>
    </>
  );
}

export default App;
