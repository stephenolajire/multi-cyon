import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChurchRegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    churchName: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Church registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Church Registration
          </h1>
          <p className="text-gray-600">Join our community today</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Church Name */}
          <div>
            <input
              type="text"
              name="churchName"
              placeholder="Church Name *"
              value={formData.churchName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Church Email *"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password *"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Security Question */}
          <div>
            <select
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-gray-700 bg-white"
            >
              <option value="">Please select your Security Question *</option>
              <option value="pastor">What is your pastor's first name?</option>
              <option value="founded">
                What year was your church founded?
              </option>
              <option value="city">In what city is your church located?</option>
              <option value="denomination">
                What is your church denomination?
              </option>
              <option value="street">What street is your church on?</option>
            </select>
          </div>

          {/* Security Answer */}
          <div>
            <input
              type="text"
              name="securityAnswer"
              placeholder="Enter Your Answer *"
              value={formData.securityAnswer}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          {/* Register Button */}
          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Register Church
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
}
