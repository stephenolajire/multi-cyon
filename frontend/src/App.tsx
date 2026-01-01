import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSLayout from "./layout/SaaSLayout";
import LandingPage from "./pages/LandingPage";
import Registration from "./auth/Registration";
import CYONLayout from "./layout/CYONLayout";
import Home from "./parish/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SaaSLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="register" element={<Registration />} />

          <Route path="/cyon/:slug" element={<CYONLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
