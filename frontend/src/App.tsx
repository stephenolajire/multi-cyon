import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSLayout from "./layout/SaaSLayout";
import LandingPage from "./pages/LandingPage";
import Registration from "./auth/Registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SaaSLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="register" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
