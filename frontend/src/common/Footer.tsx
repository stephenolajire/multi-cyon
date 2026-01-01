const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              FaithConnect
            </h2>
            <p className="text-sm leading-relaxed">
              One platform built to help churches manage, connect, and grow
              their communities digitally.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-medium mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">Features</li>
              <li className="hover:text-white transition">Pricing</li>
              <li className="hover:text-white transition">Security</li>
              <li className="hover:text-white transition">Integrations</li>
            </ul>
          </div>

          {/* Churches */}
          <div>
            <h3 className="text-white font-medium mb-4">For Churches</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">Get Started</li>
              <li className="hover:text-white transition">Church Dashboard</li>
              <li className="hover:text-white transition">Customization</li>
              <li className="hover:text-white transition">Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Terms of Service</li>
              <li className="hover:text-white transition">Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} FaithConnect. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <span className="hover:text-white transition cursor-pointer">
              Contact
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Documentation
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Status
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
