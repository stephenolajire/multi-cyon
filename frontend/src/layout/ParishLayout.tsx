import { Outlet } from "react-router-dom";
import Sidebar from "../parish/Sidebar";

const ParishLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Content Wrapper */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParishLayout;
