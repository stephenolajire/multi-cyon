import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Search,
  Plus,
  Users,
  Calendar,
  MapPin,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  MessageCircle,
} from "lucide-react";
import CreateGroupModal from "./components/CreateGroup";

const CYONMemberGroups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showActions, setShowActions] = useState<number | null>(null);

  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  const openCreateGroupModal = () => {
    setShowCreateGroupModal(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const groups = [
    {
      id: 1,
      name: "Praise & Worship Team",
      category: "Ministry",
      leader: "Chioma Adeyemi",
      members: 24,
      location: "Lagos Diocese",
      meetingDay: "Sundays",
      meetingTime: "8:00 AM",
      description: "Leading worship and praise during CYON services and events",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Bible Study Group",
      category: "Spiritual",
      leader: "Emeka Okonkwo",
      members: 32,
      location: "Enugu Diocese",
      meetingDay: "Wednesdays",
      meetingTime: "6:00 PM",
      description: "Weekly in-depth Bible study and discussion sessions",
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Evangelism Team",
      category: "Ministry",
      leader: "Blessing Okoro",
      members: 18,
      location: "Onitsha Diocese",
      meetingDay: "Saturdays",
      meetingTime: "10:00 AM",
      description: "Reaching out to youth and spreading the Gospel message",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Youth Choir",
      category: "Ministry",
      leader: "Chinedu Eze",
      members: 40,
      location: "Aba Diocese",
      meetingDay: "Thursdays",
      meetingTime: "5:30 PM",
      description: "Choir practice and music ministry for CYON events",
      color: "bg-pink-500",
    },
    {
      id: 5,
      name: "Social Action Group",
      category: "Outreach",
      leader: "Chiamaka Nnamdi",
      members: 15,
      location: "Lagos Diocese",
      meetingDay: "Saturdays",
      meetingTime: "2:00 PM",
      description: "Community service and charitable activities",
      color: "bg-orange-500",
    },
    {
      id: 6,
      name: "Drama Ministry",
      category: "Ministry",
      leader: "Obiora Ugwu",
      members: 12,
      location: "Awka Diocese",
      meetingDay: "Fridays",
      meetingTime: "4:00 PM",
      description: "Using drama and theater to communicate faith messages",
      color: "bg-indigo-500",
    },
    {
      id: 7,
      name: "Prayer Warriors",
      category: "Spiritual",
      leader: "Ngozi Okeke",
      members: 28,
      location: "Enugu Diocese",
      meetingDay: "Tuesdays",
      meetingTime: "6:30 PM",
      description: "Dedicated prayer group for CYON and community needs",
      color: "bg-teal-500",
    },
    {
      id: 8,
      name: "Media & Communications",
      category: "Technical",
      leader: "Ikenna Madu",
      members: 10,
      location: "Lagos Diocese",
      meetingDay: "Mondays",
      meetingTime: "5:00 PM",
      description: "Managing social media, graphics, and video production",
      color: "bg-red-500",
    },
  ];

  const categories = ["all", "Ministry", "Spiritual", "Outreach", "Technical"];

  const filteredGroups = groups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.leader.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: "Total Groups", value: groups.length.toString() },
    {
      label: "Total Members",
      value: groups.reduce((sum, g) => sum + g.members, 0).toString(),
    },
    { label: "Active Leaders", value: groups.length.toString() },
    { label: "Categories", value: (categories.length - 1).toString() },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-church-accent mb-2">
          Member Groups
        </h1>
        <p className="text-church-tertiary">
          Organize and manage CYON ministry groups and teams
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
            <div className="text-2xl font-bold text-church-accent mb-1">
              {stat.value}
            </div>
            <div className="text-church-tertiary text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search and Filter Bar */}
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
                placeholder="Search groups or leaders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary focus:border-transparent text-church-accent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            <button onClick={openCreateGroupModal} className="flex items-center gap-2 px-4 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Create Group</span>
            </button>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGroups.map((group, index) => (
          <div
            key={group.id}
            className="bg-white rounded-lg border border-church-sec overflow-hidden hover:shadow-lg transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {/* Group Header with Color */}
            <div className={`${group.color} h-24 relative`}>
              <div className="absolute top-3 right-3">
                <button
                  onClick={() =>
                    setShowActions(showActions === group.id ? null : group.id)
                  }
                  className="p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-church-accent" />
                </button>

                {showActions === group.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-church-sec shadow-lg z-10">
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-church-accent transition-colors text-left">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-church-accent transition-colors text-left">
                      <UserPlus className="w-4 h-4" />
                      Add Members
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-church-accent transition-colors text-left">
                      <Edit className="w-4 h-4" />
                      Edit Group
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-red-600 transition-colors text-left">
                      <Trash2 className="w-4 h-4" />
                      Delete Group
                    </button>
                  </div>
                )}
              </div>

              <div className="absolute -bottom-6 left-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-white">
                  <Users className="w-6 h-6 text-church-primary" />
                </div>
              </div>
            </div>

            {/* Group Content */}
            <div className="p-6 pt-8">
              <div className="mb-3">
                <h3 className="font-semibold text-church-accent text-lg mb-1 group-hover:text-church-primary transition-colors">
                  {group.name}
                </h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-church-tertiary text-xs rounded">
                  {group.category}
                </span>
              </div>

              <p className="text-church-tertiary text-sm mb-4 line-clamp-2">
                {group.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-church-tertiary text-sm">
                  <Users className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {group.members} members • Led by {group.leader}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-church-tertiary text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="truncate">{group.location}</span>
                </div>
                <div className="flex items-center gap-2 text-church-tertiary text-sm">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {group.meetingDay}, {group.meetingTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t border-church-sec">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>Message</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <div
          className="bg-white rounded-lg border border-church-sec p-12 text-center"
          data-aos="fade-up"
        >
          <Users className="w-16 h-16 text-church-tertiary mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold text-church-accent mb-2">
            No groups found
          </h3>
          <p className="text-church-tertiary mb-6">
            Try adjusting your search or filters
          </p>
          <button className="px-6 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
            Clear Filters
          </button>
        </div>
      )}

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <CreateGroupModal
          isOpen={showCreateGroupModal}
          onClose={() => setShowCreateGroupModal(false)}
        />
      )}
    </div>
  );
};

export default CYONMemberGroups;
