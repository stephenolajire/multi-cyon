import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower CYON organizations with innovative solutions that drive efficiency, collaboration, and sustainable growth.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of experts dedicated to understanding your needs and delivering exceptional results tailored to your organization.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "We believe in transparency, integrity, and excellence in everything we do, building lasting partnerships with our clients.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description:
        "To be the leading platform that connects every CYON organization, creating a seamlessly integrated ecosystem for success.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-700 mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            We're on a mission to revolutionize how CYON organizations operate,
            connect, and grow in an increasingly digital world.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Our Story
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4 text-center">
              Founded with a vision to streamline operations across CYON
              organizations, we recognized the challenges faced by businesses
              managing multiple systems, disconnected data, and inefficient
              workflows.
            </p>
            <p className="text-gray-500 leading-relaxed text-center">
              Today, we're proud to serve hundreds of organizations worldwide,
              providing them with a unified platform that brings together all
              their essential tools, data, and teams in one seamless
              environment.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:border-gray-700 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <value.icon className="w-12 h-12 text-gray-700 mb-4" />
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="text-5xl font-bold text-gray-700 mb-3">01</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Innovation First
              </h4>
              <p className="text-gray-500 text-sm">
                We continuously evolve our platform with cutting-edge technology
                to keep you ahead of the curve.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl font-bold text-gray-700 mb-3">02</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Customer-Centric
              </h4>
              <p className="text-gray-500 text-sm">
                Your success is our priority. We listen, adapt, and deliver
                solutions that truly meet your needs.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <div className="text-5xl font-bold text-gray-700 mb-3">03</div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Proven Results
              </h4>
              <p className="text-gray-500 text-sm">
                Our track record speaks for itself with measurable improvements
                in efficiency and growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-gray-500 mb-6 text-lg">
            Ready to transform your organization?
          </p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
