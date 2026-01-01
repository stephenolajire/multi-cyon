import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Database,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Users,
  Settings,
  Headphones,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const services = [
    {
      icon: Database,
      title: "Church Data Management",
      description:
        "Manage all church records in one secure platform. Keep member information, attendance, and records organized and accessible.",
      features: [
        "Centralized member records",
        "Attendance tracking",
        "Secure data storage",
      ],
    },
    {
      icon: Cloud,
      title: "Online Church Platform",
      description:
        "Access your church dashboard from anywhere. Manage events, members, and content seamlessly across devices.",
      features: [
        "Cloud-based access",
        "Multi-device support",
        "Reliable uptime",
      ],
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description:
        "Protect sensitive church and member data with enterprise-grade security and role-based access control.",
      features: [
        "Data encryption",
        "Role-based permissions",
        "Privacy protection",
      ],
    },
    {
      icon: Zap,
      title: "Church Operations Automation",
      description:
        "Automate routine administrative tasks so your leadership team can focus more on ministry and community.",
      features: [
        "Event reminders",
        "Member notifications",
        "Automated workflows",
      ],
    },
    {
      icon: BarChart3,
      title: "Insights & Reports",
      description:
        "Track church growth and engagement with clear reports and easy-to-understand analytics.",
      features: [
        "Attendance insights",
        "Engagement tracking",
        "Downloadable reports",
      ],
    },
    {
      icon: Users,
      title: "Member & Team Management",
      description:
        "Easily manage members, leaders, and church groups while improving communication and collaboration.",
      features: ["Member profiles", "Leadership roles", "Group coordination"],
    },
    {
      icon: Settings,
      title: "Custom Church Branding",
      description:
        "Customize your church website with your own colors, logo, and identity — no technical skills required.",
      features: [
        "Custom colors & themes",
        "Church-specific pages",
        "Flexible configuration",
      ],
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Get reliable support whenever you need it. Our team is always available to help your church succeed.",
      features: ["Live support", "Onboarding assistance", "Help documentation"],
    },
  ];


  const process = [
    {
      step: "01",
      title: "Church Registration",
      description:
        "Create your church profile and get your own dedicated link within minutes.",
    },
    {
      step: "02",
      title: "Setup & Customization",
      description:
        "Customize your church branding, colors, and settings to reflect your identity.",
    },
    {
      step: "03",
      title: "Invite Members",
      description:
        "Add leaders, members, and teams to begin managing your church digitally.",
    },
    {
      step: "04",
      title: "Grow & Manage",
      description:
        "Manage events, track engagement, and strengthen your church community from one platform.",
    },
  ];


  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-700 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Comprehensive solutions designed to streamline your operations and
            drive growth. Everything you need to succeed in one powerful
            platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-700 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <service.icon className="w-12 h-12 text-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-500 text-sm flex items-start"
                  >
                    <span className="text-gray-700 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4 text-center">
            Our Process
          </h3>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            A proven methodology that ensures successful implementation and
            long-term success for your organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
                  <div className="text-5xl font-bold text-gray-700 mb-4 opacity-30">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Highlight */}
        <div
          className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">
                Why Organizations Choose Our Platform
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We provide more than just software—we deliver a complete
                solution that transforms how your organization operates,
                collaborates, and grows.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduce operational costs by up to 40%",
                  "Increase team productivity and efficiency",
                  "Seamless integration with existing tools",
                  "Scalable solutions that grow with you",
                  "Dedicated support and training",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-500">
                    <span className="text-gray-700 font-bold mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-700 mb-2">
                  500+
                </div>
                <p className="text-gray-500 text-sm">Organizations Trust Us</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-700 mb-2">
                  50K+
                </div>
                <p className="text-gray-500 text-sm">Daily Active Users</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-700 mb-2">
                  99.9%
                </div>
                <p className="text-gray-500 text-sm">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-500 mb-6 text-lg">
            Ready to experience the difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
