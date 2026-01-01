import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSLayout from "./layout/SaaSLayout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SaaSLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
