import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;