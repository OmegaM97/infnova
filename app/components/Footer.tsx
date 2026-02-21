import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1D3A] text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row gap-10">
          
          <div className="md:w-1/2">
            <h2 className="text-white text-2xl font-bold mb-4">
              INFINOVA Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We provide high-quality online courses designed to help you build
              real-world skills and advance your career in technology and beyond.
            </p>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Courses</Link></li>
              <li><Link href="#" className="hover:text-white">Instructors</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 INFINOVA Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;