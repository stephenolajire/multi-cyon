import { useState } from "react";
import { X, Upload, User, Mail, Phone, MapPin, Users } from "lucide-react";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMemberModal = ({ isOpen, onClose }: AddMemberModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    diocese: "",
    parish: "",
    zone: "",
    address: "",
    interests: [] as string[],
    emergencyContact: "",
    emergencyPhone: "",
    baptized: "",
    confirmed: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

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

  const zones = ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"];

  const interestOptions = [
    "Praise & Worship",
    "Bible Study",
    "Youth Choir",
    "Evangelism",
    "Drama Ministry",
    "Media & Communications",
    "Social Action",
    "Prayer Warriors",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-church-sec">
          <h2 className="text-2xl font-bold text-church-accent">
            Add New Member
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-church-tertiary" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Profile Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-church-accent mb-3">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-church-sec">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-church-tertiary" />
                )}
              </div>
              <label className="flex items-center gap-2 px-4 py-2 border border-church-sec rounded-lg text-church-tertiary hover:text-church-accent hover:border-church-primary transition-colors cursor-pointer">
                <Upload className="w-4 h-4" />
                <span>Upload Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="+234 800 000 0000"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter residential address"
                />
              </div>
            </div>
          </div>

          {/* Church Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Church Information
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
                  Parish <span className="text-red-500">*</span>
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
                  Zone <span className="text-red-500">*</span>
                </label>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select zone</option>
                  {zones.map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Baptized <span className="text-red-500">*</span>
                </label>
                <select
                  name="baptized"
                  value={formData.baptized}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Confirmed <span className="text-red-500">*</span>
                </label>
                <select
                  name="confirmed"
                  value={formData.confirmed}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent cursor-pointer"
                >
                  <option value="">Select status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Ministry Interests */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Ministry Interests
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interestOptions.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-2 p-3 border border-church-sec rounded-lg cursor-pointer hover:border-church-primary transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                    className="w-4 h-4 text-church-primary border-church-sec rounded focus:ring-church-primary cursor-pointer"
                  />
                  <span className="text-sm text-church-accent">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-church-accent mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="Enter emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-church-accent mb-2">
                  Contact Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-church-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-church-primary text-church-accent"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>
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
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
