import { Outlet } from "react-router-dom";
import DesktopNavigation from "../common/ChurchNavigation";
import MobileNavigation from "../common/ChurchMobileNav";
import Footer from "../common/Footer";

const SaaSLayout = () => {
  return (
    <div>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden lg:block">
        <DesktopNavigation />
      </div>

      {/* Mobile Navigation - Hidden on desktop */}
      <div className="block lg:hidden">
        <MobileNavigation />
      </div>

      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SaaSLayout;
