import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSLayout from "./layout/SaaSLayout";
import LandingPage from "./pages/LandingPage";
import Registration from "./auth/Registration";
import CYONLayout from "./layout/CYONLayout";
import Home from "./parish/Home";
import ChurchDashboardOverview from "./parish/Overview";
import ParishLayout from "./layout/ParishLayout";
import CYONMembers from "./parish/CYONMember";
import CYONMemberGroups from "./parish/MemberGroup";
import CYONNewMembers from "./parish/NewMembers";

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

          <Route path="/cyon/:slug/admin" element={<ParishLayout />}>
            <Route index element={<ChurchDashboardOverview />} />
            <Route path="members/all" element={<CYONMembers />} />
            <Route path="members/groups" element={<CYONMemberGroups />} />
            <Route path="members/new" element={<CYONNewMembers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
