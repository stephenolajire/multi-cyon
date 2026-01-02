import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  UserCheck,
  Download,
  Send,
} from "lucide-react";

const CYONNewMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const newMembers = [
    {
      id: 1,
      name: "Adaeze Obi",
      email: "adaeze.obi@email.com",
      phone: "+234 807 123 4567",
      location: "Lagos Diocese",
      age: 22,
      registrationDate: "Jan 2, 2026",
      status: "pending",
      requestedZone: "Zone A",
      interests: ["Praise & Worship", "Bible Study"],
      avatar: "AO",
    },
    {
      id: 2,
      name: "Chukwudi Nwankwo",
      email: "chukwudi.n@email.com",
      phone: "+234 808 234 5678",
      location: "Enugu Diocese",
      age: 20,
      registrationDate: "Jan 1, 2026",
      status: "pending",
      requestedZone: "Zone B",
      interests: ["Youth Choir", "Evangelism"],
      avatar: "CN",
    },
    {
      id: 3,
      name: "Ifunanya Okoro",
      email: "ifunanya.okoro@email.com",
      phone: "+234 809 345 6789",
      location: "Onitsha Diocese",
      age: 19,
      registrationDate: "Dec 31, 2025",
      status: "approved",
      requestedZone: "Zone A",
      interests: ["Drama Ministry", "Social Action"],
      avatar: "IO",
    },
    {
      id: 4,
      name: "Kelechi Eze",
      email: "kelechi.eze@email.com",
      phone: "+234 810 456 7890",
      location: "Aba Diocese",
      age: 21,
      registrationDate: "Dec 30, 2025",
      status: "pending",
      requestedZone: "Zone C",
      interests: ["Media & Communications", "Bible Study"],
      avatar: "KE",
    },
    {
      id: 5,
      name: "Onyinye Madu",
      email: "onyinye.madu@email.com",
      phone: "+234 811 567 8901",
      location: "Awka Diocese",
      age: 23,
      registrationDate: "Dec 29, 2025",
      status: "rejected",
      requestedZone: "Zone B",
      interests: ["Prayer Warriors"],
      avatar: "OM",
    },
    {
      id: 6,
      name: "Chidiebere Ugwu",
      email: "chidi.ugwu@email.com",
      phone: "+234 812 678 9012",
      location: "Lagos Diocese",
      age: 18,
      registrationDate: "Dec 28, 2025",
      status: "approved",
      requestedZone: "Zone A",
      interests: ["Youth Choir", "Praise & Worship"],
      avatar: "CU",
    },
    {
      id: 7,
      name: "Amarachi Okafor",
      email: "amarachi.ok@email.com",
      phone: "+234 813 789 0123",
      location: "Enugu Diocese",
      age: 24,
      registrationDate: "Dec 27, 2025",
      status: "pending",
      requestedZone: "Zone B",
      interests: ["Evangelism", "Social Action"],
      avatar: "AO",
    },
    {
      id: 8,
      name: "Ebuka Nnamdi",
      email: "ebuka.nnamdi@email.com",
      phone: "+234 814 890 1234",
      location: "Onitsha Diocese",
      age: 20,
      registrationDate: "Dec 26, 2025",
      status: "pending",
      requestedZone: "Zone A",
      interests: ["Bible Study", "Prayer Warriors"],
      avatar: "EN",
    },
  ];

  const filteredMembers = newMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    {
      label: "Pending Review",
      value: newMembers.filter((m) => m.status === "pending").length.toString(),
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      label: "Approved",
      value: newMembers
        .filter((m) => m.status === "approved")
        .length.toString(),
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: "This Week",
      value: newMembers
        .filter((m) => {
          const date = new Date(m.registrationDate);
          const today = new Date();
          const weekAgo = new Date(today.setDate(today.getDate() - 7));
          return date >= weekAgo;
        })
        .length.toString(),
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      label: "Total New",
      value: newMembers.length.toString(),
      icon: UserCheck,
      color: "text-church-primary",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case "approved":
        return (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1">
            <XCircle className="w-3 h-3" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  const toggleSelectMember = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(filteredMembers.map((m) => m.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-church-accent mb-2">
          New Members
        </h1>
        <p className="text-church-tertiary">
          Review and approve new CYON member registrations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-church-sec p-4 lg:p-6 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-church-accent mb-1">
              {stat.value}
            </div>
            <div className="text-church-tertiary text-sm">{stat.label}</div>
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
                placeholder="Search new members..."
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
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>

            {selectedMembers.length > 0 && (
              <>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve ({selectedMembers.length})</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <XCircle className="w-4 h-4" />
                  <span>Reject ({selectedMembers.length})</span>
                </button>
              </>
            )}
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
                <th className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={
                      selectedMembers.length === filteredMembers.length &&
                      filteredMembers.length > 0
                    }
                    onChange={selectAll}
                    className="w-4 h-4 text-church-primary border-church-sec rounded focus:ring-church-primary cursor-pointer"
                  />
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Member
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Contact
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Location & Zone
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Age
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Interests
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Registered
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-church-accent">
                  Status
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
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => toggleSelectMember(member.id)}
                      className="w-4 h-4 text-church-primary border-church-sec rounded focus:ring-church-primary cursor-pointer"
                    />
                  </td>
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
                    <div className="flex items-center gap-2 text-church-tertiary text-sm mb-1">
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-church-accent mb-1">
                      {member.location}
                    </div>
                    <div className="text-xs text-church-tertiary">
                      {member.requestedZone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-church-accent">
                      {member.age} years
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {member.interests.slice(0, 2).map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-church-tertiary text-xs rounded"
                        >
                          {interest}
                        </span>
                      ))}
                      {member.interests.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-church-tertiary text-xs rounded">
                          +{member.interests.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-church-tertiary">
                    {member.registrationDate}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(member.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {member.status === "pending" && (
                        <>
                          <button
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Approve"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Reject"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      <button
                        className="p-2 text-church-primary hover:bg-blue-50 rounded-lg transition-colors"
                        title="Send Email"
                      >
                        <Send className="w-5 h-5" />
                      </button>
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
              <div className="flex items-start gap-3 mb-3">
                <input
                  type="checkbox"
                  checked={selectedMembers.includes(member.id)}
                  onChange={() => toggleSelectMember(member.id)}
                  className="mt-1 w-4 h-4 text-church-primary border-church-sec rounded focus:ring-church-primary cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-church-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-church-accent">
                          {member.name}
                        </div>
                        <div className="text-xs text-church-tertiary">
                          {member.age} years
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(member.status)}
                  </div>

                  <div className="space-y-2 text-sm mb-3">
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
                      {member.location} • {member.requestedZone}
                    </div>
                    <div className="flex items-center gap-2 text-church-tertiary">
                      <Calendar className="w-4 h-4" />
                      Registered {member.registrationDate}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-church-tertiary mb-1">
                      Interests:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-church-tertiary text-xs rounded"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.status === "pending" && (
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div
        className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        data-aos="fade-up"
      >
        <div className="text-sm text-church-tertiary">
          Showing {filteredMembers.length} of {newMembers.length} new members
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CYONNewMembers;
