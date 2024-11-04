import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound.jsx";
import VkLogin from "./pages/VkLogin.jsx";
import Home from "./pages/Home.jsx";
import CheckState from "./pages/CheckState.jsx";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/vk-login/login" element={<VkLogin />} />
        <Route path="/api/vk-login/state" element={<CheckState />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
