import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Search,
  Filter,
  UserPlus,
  Download,
  Mail,
  Phone,
  MapPin,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import AddMemberModal from "./components/AddNewMemberModal";

const CYONMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showActions, setShowActions] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);
  
    const handleAddMember = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const members = [
    {
      id: 1,
      name: "Chukwuemeka Okafor",
      email: "chukwu.okafor@email.com",
      phone: "+234 801 234 5678",
      location: "Lagos Diocese",
      zone: "Zone A",
      status: "active",
      joinDate: "Jan 2024",
      avatar: "CO",
    },
    {
      id: 2,
      name: "Chiamaka Nwosu",
      email: "chiamaka.nwosu@email.com",
      phone: "+234 802 345 6789",
      location: "Enugu Diocese",
      zone: "Zone B",
      status: "active",
      joinDate: "Feb 2024",
      avatar: "CN",
    },
    {
      id: 3,
      name: "Obiora Eze",
      email: "obiora.eze@email.com",
      phone: "+234 803 456 7890",
      location: "Onitsha Diocese",
      zone: "Zone A",
      status: "inactive",
      joinDate: "Dec 2023",
      avatar: "OE",
    },
    {
      id: 4,
      name: "Ngozi Okeke",
      email: "ngozi.okeke@email.com",
      phone: "+234 804 567 8901",
      location: "Aba Diocese",
      zone: "Zone C",
      status: "active",
      joinDate: "Mar 2024",
      avatar: "NO",
    },
    {
      id: 5,
      name: "Chisom Agu",
      email: "chisom.agu@email.com",
      phone: "+234 805 678 9012",
      location: "Awka Diocese",
      zone: "Zone B",
      status: "active",
      joinDate: "Jan 2024",
      avatar: "CA",
    },
    {
      id: 6,
      name: "Ikenna Madu",
      email: "ikenna.madu@email.com",
      phone: "+234 806 789 0123",
      location: "Lagos Diocese",
      zone: "Zone A",
      status: "active",
      joinDate: "Apr 2024",
      avatar: "IM",
    },
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: "Total Members", value: "1,234", change: "+12%" },
    { label: "Active Members", value: "1,156", change: "+8%" },
    { label: "New This Month", value: "45", change: "+15%" },
    { label: "Zones", value: "8", change: "0%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-church-accent mb-2">
          CYON Members
        </h1>
        <p className="text-church-tertiary">
          Manage and view all Catholic Youth Organization of Nigeria members
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-church-sec p-6 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-2xl font-bold text-church-accent mb-1">
              {stat.value}
            </div>
            <div className="text-church-tertiary text-sm mb-2">
              {stat.label}
            </div>
            <div className="text-sm font-medium text-green-600">
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Actions Bar */}
      <div
        className="bg-white rounded-lg border border-church-sec p-4 mb-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-church-tertiary w-5 h-5" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary focus:border-transparent text-church-accent"
              />
            </div>
          </div>

          {/* Filter and Actions */}
          <div className="flex gap-3 flex-wrap">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>

            <button onClick={handleAddMember} className="flex items-center gap-2 px-4 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
              <UserPlus className="w-4 h-4" />
              <span>Add Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div
        className="bg-white rounded-lg border border-church-sec overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-church-sec">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Member
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Contact
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Location
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Zone
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Joined
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr
                  key={member.id}
                  className="border-b border-church-sec hover:bg-gray-50 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-church-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-church-accent">
                          {member.name}
                        </div>
                        <div className="text-sm text-church-tertiary">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-church-tertiary text-sm">
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-church-tertiary text-sm">
                      <MapPin className="w-4 h-4" />
                      {member.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-church-accent">
                      {member.zone}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        member.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {member.status.charAt(0).toUpperCase() +
                        member.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-church-tertiary">
                    {member.joinDate}
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setShowActions(
                            showActions === member.id ? null : member.id
                          )
                        }
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreVertical className="w-5 h-5 text-church-tertiary" />
                      </button>

                      {showActions === member.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-church-sec shadow-lg z-10">
                          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-church-accent transition-colors">
                            <Eye className="w-4 h-4" />
                            View Details
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-church-accent transition-colors">
                            <Edit className="w-4 h-4" />
                            Edit Member
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                            Delete Member
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden divide-y divide-church-sec">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="p-4"
              data-aos="fade-up"
              data-aos-delay={300 + index * 50}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-church-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-church-accent">
                      {member.name}
                    </div>
                    <span
                      className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                        member.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {member.status.charAt(0).toUpperCase() +
                        member.status.slice(1)}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-church-tertiary" />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-church-tertiary">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-church-tertiary">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </div>
                <div className="flex items-center gap-2 text-church-tertiary">
                  <MapPin className="w-4 h-4" />
                  {member.location} • {member.zone}
                </div>
                <div className="text-church-tertiary text-xs">
                  Joined {member.joinDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <AddMemberModal isOpen={showModal} onClose={closeModal} />
      )}

      {/* Pagination */}
      <div
        className="mt-6 flex items-center justify-between"
        data-aos="fade-up"
      >
        <div className="text-sm text-church-tertiary">
          Showing {filteredMembers.length} of {members.length} members
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:bg-white transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
            1
          </button>
          <button className="px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:bg-white transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:bg-white transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:bg-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CYONMembers;
