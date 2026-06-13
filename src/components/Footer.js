const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-12 pb-6 px-8 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-2xl bg-gradient-to-r from-[#ff6b35] to-[#ff9f1c] bg-clip-text text-transparent">
            Namma Food
          </h3>
          <p className="text-gray-400 text-sm">
            Connecting food lovers with the best kitchens in town. Fast, fresh, and gourmet.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#ff9f1c]">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white transition-colors"><a href="#">About Us</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Careers</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Blog</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Teams</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#ff9f1c]">Contact</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white transition-colors"><a href="#">Help & Support</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Partner with us</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Ride with us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-[#ff9f1c]">Social Links</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white transition-colors"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className="hover:text-white transition-colors"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className="hover:text-white transition-colors"><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© 2025 Namma Food. All rights reserved.</p>
        <p>Developed with ❤️ by Aman Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
