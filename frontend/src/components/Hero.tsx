import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BarChart3, Users, TrendingUp, Shield, Globe } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="pt-10 bg-gray-50">
      <h1
        className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-center text-gray-700 leading-tight px-4"
        data-aos="fade-down"
      >
        One Platform. Every CYON Organization. <br /> Fully Connected.
      </h1>

      <p
        className="text-center text-gray-600 mt-6 text-lg max-w-2xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Streamline your operations, connect your teams, and drive growth with
        the unified platform built for CYON organizations.
      </p>

      <div
        className="my-8 w-full flex justify-center gap-4 flex-wrap px-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 rounded-lg transition-all duration-200 hover:scale-105">
          Get Started
        </button>
        <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 md:px-10 lg:px-12 py-3 rounded-lg transition-all duration-200 hover:scale-105">
          Learn More
        </button>
      </div>

      <div className="relative py-16 mt-8 min-h-screen px-4 sm:px-6 md:px-10 lg:px-15 bg-linear-to-b from-gray-900 via-gray-900 to-black rounded-t-[200px] flex flex-col items-center justify-start">
        <div className="text-center mt-8 mb-12" data-aos="fade-down">
          <h2 className="text-white text-3xl font-semibold mb-4">
            See It In Action
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Experience seamless integration across all your organizational tools
          </p>
        </div>

        {/* Dashboard Design */}
        <div
          className="w-full max-w-8xl bg-gray-700 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {/* Dashboard Header */}
          <div className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-medium">
                CYON Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-pink-500"></div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 bg-linear-to-br from-gray-800 to-gray-900">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div
                className="bg-linear-to-br from-blue-600 to-blue-700 rounded-xl p-5 shadow-lg"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-8 h-8 text-white opacity-80" />
                  <span className="text-blue-200 text-sm font-medium">
                    +12%
                  </span>
                </div>
                <div className="text-white text-2xl font-bold mb-1">2,543</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>

              <div
                className="bg-linear-to-br from-purple-600 to-purple-700 rounded-xl p-5 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-8 h-8 text-white opacity-80" />
                  <span className="text-purple-200 text-sm font-medium">
                    +28%
                  </span>
                </div>
                <div className="text-white text-2xl font-bold mb-1">$48.2K</div>
                <div className="text-purple-200 text-sm">Revenue</div>
              </div>

              <div
                className="bg-linear-to-br from-green-600 to-green-700 rounded-xl p-5 shadow-lg"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="flex items-center justify-between mb-3">
                  <BarChart3 className="w-8 h-8 text-white opacity-80" />
                  <span className="text-green-200 text-sm font-medium">
                    +8%
                  </span>
                </div>
                <div className="text-white text-2xl font-bold mb-1">156</div>
                <div className="text-green-200 text-sm">Projects</div>
              </div>
            </div>

            {/* Chart Area */}
            <div
              className="bg-gray-900 rounded-xl p-6 mb-6 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">
                  Performance Overview
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    Week
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                    Month
                  </button>
                  <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    Year
                  </button>
                </div>
              </div>

              {/* Simple Chart Visualization */}
              <div className="flex items-end justify-between gap-2 h-32">
                {[40, 65, 45, 80, 55, 75, 90, 70, 85, 60, 95, 100].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-500 hover:to-blue-300 transition-all cursor-pointer"
                      style={{ height: `${height}%` }}
                      data-aos="fade-up"
                      data-aos-delay={800 + i * 50}
                    ></div>
                  )
                )}
              </div>
              <div className="flex justify-between mt-3 text-gray-500 text-xs">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Recent Activity
                </h4>
                <div className="space-y-3">
                  {[
                    "New user registered",
                    "Project completed",
                    "Team meeting scheduled",
                    "Report generated",
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-300">{activity}</span>
                      <span className="text-gray-500 ml-auto">
                        {i + 1}h ago
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  System Status
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "API Performance", status: 98 },
                    { name: "Database Health", status: 100 },
                    { name: "Security Score", status: 95 },
                    { name: "Uptime", status: 99.9 },
                  ].map((item, i) => (
                    <div key={i} className="text-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-green-400 font-medium">
                          {item.status}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div
                          className="bg-linear-to-r from-green-500 to-green-400 h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${item.status}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl text-white w-full"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="text-center" data-aos="flip-up" data-aos-delay="1100">
            <div className="text-4xl font-bold text-gray-300 mb-2">100+</div>
            <div className="text-gray-400">Organizations Connected</div>
          </div>
          <div className="text-center" data-aos="flip-up" data-aos-delay="1200">
            <div className="text-4xl font-bold text-gray-300 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center" data-aos="flip-up" data-aos-delay="1300">
            <div className="text-4xl font-bold text-gray-300 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
