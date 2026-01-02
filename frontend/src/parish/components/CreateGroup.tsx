import { useState } from "react";
import {
  X,
  Users,
  MapPin,
  Calendar,
  User,
  BookOpen,
  Palette,
} from "lucide-react";

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateGroupModal = ({ isOpen, onClose }: CreateGroupModalProps) => {
  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    diocese: "",
    parish: "",
    meetingDay: "",
    meetingTime: "",
    meetingLocation: "",
    maxMembers: "",
    description: "",
    objectives: "",
    requirements: "",
    color: "#3B82F6",
  });

  const categories = [
    "Ministry",
    "Spiritual",
    "Outreach",
    "Technical",
    "Social",
    "Educational",
  ];

  const dioceses = [
    "Lagos Diocese",
    "Enugu Diocese",
    "Onitsha Diocese",
    "Aba Diocese",
    "Awka Diocese",
    "Abuja Diocese",
    "Port Harcourt Diocese",
    "Ibadan Diocese",
  ];

  const meetingDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const colorOptions = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Pink", value: "#EC4899" },
    { name: "Red", value: "#EF4444" },
    { name: "Orange", value: "#F97316" },
    { name: "Green", value: "#10B981" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Indigo", value: "#6366F1" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorSelect = (color: string) => {
    setFormData((prev) => ({ ...prev, color }));
  };

  const handleSubmit = () => {
    console.log("Group created:", formData);
    // Handle form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-church-sec">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-church-primary rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-church-accent">
              Create New Group
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-church-tertiary" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Group Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="groupName"
                  value={formData.groupName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="e.g., Praise & Worship Team"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Maximum Members
                </label>
                <input
                  type="number"
                  name="maxMembers"
                  value={formData.maxMembers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="e.g., 50"
                  min="1"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Describe the purpose and activities of this group"
                />
              </div>
            </div>
          </div>

          {/* Group Leader Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Group Leader Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Leader Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="leaderName"
                  value={formData.leaderName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter leader's full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Leader Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="leaderEmail"
                  value={formData.leaderEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="leader@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Leader Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="leaderPhone"
                  value={formData.leaderPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>
          </div>

          {/* Location & Meeting Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location & Meeting Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Diocese <span className="text-red-500">*</span>
                </label>
                <select
                  name="diocese"
                  value={formData.diocese}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select diocese</option>
                  {dioceses.map((diocese) => (
                    <option key={diocese} value={diocese}>
                      {diocese}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Parish
                </label>
                <input
                  type="text"
                  name="parish"
                  value={formData.parish}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter parish name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Meeting Day <span className="text-red-500">*</span>
                </label>
                <select
                  name="meetingDay"
                  value={formData.meetingDay}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select day</option>
                  {meetingDays.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Meeting Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Meeting Location
                </label>
                <input
                  type="text"
                  name="meetingLocation"
                  value={formData.meetingLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="e.g., Church Hall, Online via Zoom, etc."
                />
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Additional Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Group Objectives
                </label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="What are the main goals and objectives of this group?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Membership Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Any specific requirements or qualifications for joining this group?"
                />
              </div>
            </div>
          </div>

          {/* Group Color */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Group Color Theme
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => handleColorSelect(color.value)}
                  className={`w-full aspect-square rounded-lg transition-all ${
                    formData.color === color.value
                      ? "ring-4 ring-church-primary ring-offset-2 scale-110"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {formData.color === color.value && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-church-tertiary mt-2">
              This color will be used to identify the group in the dashboard
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-church-sec">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 bg-church-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
