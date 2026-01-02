import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  MessageSquare,
  Heart,
  BookOpen,
  BarChart3,
  Menu,
  X,
  ChevronDown,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/cyon/ofa/admin",
    },
    {
      id: "members",
      name: "Members",
      icon: Users,
      path: "/cyon/ofa/admin/members",
      submenu: [
        { name: "All Members", path: "/cyon/ofa/admin/members/all" },
        { name: "New Members", path: "/cyon/ofa/admin/members/new" },
        { name: "Member Groups", path: "/cyon/ofa/admin/members/groups" },
      ],
    },
    {
      id: "events",
      name: "Events",
      icon: Calendar,
      path: "/cyon/ofa/admin/events",
      submenu: [
        { name: "All Events", path: "/cyon/ofa/admin/events/all" },
        { name: "Create Event", path: "/cyon/ofa/admin/events/create" },
        { name: "Calendar", path: "/cyon/ofa/admin/events/calendar" },
      ],
    },
    {
      id: "donations",
      name: "Donations",
      icon: DollarSign,
      path: "/cyon/ofa/admin/donations",
      submenu: [
        { name: "Overview", path: "/cyon/ofa/admin/donations/overview" },
        { name: "Transactions", path: "/cyon/ofa/admin/donations/transactions" },
        { name: "Reports", path: "/cyon/ofa/admin/donations/reports" },
      ],
    },
    {
      id: "ministries",
      name: "Ministries",
      icon: Heart,
      path: "/cyon/ofa/admin/ministries",
    },
    {
      id: "sermons",
      name: "Sermons",
      icon: BookOpen,
      path: "/cyon/ofa/admin/sermons",
    },
    {
      id: "communications",
      name: "Communications",
      icon: MessageSquare,
      path: "/cyon/ofa/admin/communications",
    },
    {
      id: "reports",
      name: "Reports",
      icon: BarChart3,
      path: "/cyon/ofa/admin/reports",
    },
    {
      id: "documents",
      name: "Documents",
      icon: FileText,
      path: "/cyon/ofa/admin/documents",
    },
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      path: "/cyon/ofa/admin/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg border border-church-sec shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} className="text-church-accent" />
        ) : (
          <Menu size={24} className="text-church-accent" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-church-sec z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-church-sec">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-church-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-church-accent text-lg">
                Church CMS
              </h2>
              <p className="text-xs text-church-tertiary">Management System</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  // Menu item with submenu
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-church-tertiary hover:bg-gray-50 hover:text-church-accent transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedMenu === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu */}
                    {expandedMenu === item.id && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.path}>
                            <NavLink
                              to={subItem.path}
                              onClick={closeSidebar}
                              className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-sm transition-colors ${
                                  isActive
                                    ? "bg-church-primary text-white font-medium"
                                    : "text-church-tertiary hover:bg-gray-50 hover:text-church-accent"
                                }`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  // Regular menu item
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-church-primary text-white"
                          : "text-church-tertiary hover:bg-gray-50 hover:text-church-accent"
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-church-sec">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-church-primary rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-church-accent">John Doe</p>
              <p className="text-xs text-church-tertiary">Administrator</p>
            </div>
          </div>
          <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-church-sec text-church-tertiary hover:bg-gray-50 hover:text-church-accent transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Spacer for desktop to prevent content overlap */}
      <div className="hidden lg:block w-64"></div>
    </>
  );
};

export default Sidebar;
