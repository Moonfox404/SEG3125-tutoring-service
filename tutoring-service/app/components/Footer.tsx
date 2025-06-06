const Footer = () => {
  return (
    <footer className="bg-[#00326a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
        {/* Branding */}
        <div>
          <h2 className="font-bold text-lg mb-2 lg:text-xl">TutoringService</h2>
          <p className="text-sm lg:text-base">
            Empowering students to achieve their academic and career goals
            through personalized support and expert guidance
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2 lg:text-xl">Quick Links</h3>
          <ul className="space-y-1 text-sm lg:text-base">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg lg:text-xl mb-2">Contact Info</h3>
          <ul className="text-sm lg:text-base space-y-1">
            <li>123 Street, City, ON A1B 2C3</li>
            <li>(123) 456 7890</li>
            <li>info@tutoringService.ca</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg lg:text-xl mb-2">Legal</h3>
          <ul className="text-sm lg:text-base space-y-1">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white opacity-40 mx-6" />

      {/* Bottom text */}
      <div className="text-center py-4 text-sm lg:text-base">
        Designed by Eric and Xuan with <span className="text-red-400">❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
