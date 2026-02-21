"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../../public/images/Logo (1).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 md:px-8 py-4 flex items-center justify-between shadow-sm relative">
      <div className="flex items-center">
        <Link href="/"><Image
          src={Logo}
          alt="Logo"
          width={150}
          height={50}
          className="object-contain"
        /></Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-500 font-medium">
        <Link href="#">Courses</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href="#" className="text-orange-500 font-semibold">
          Sign In
        </Link>
        <Link
          href="#"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Enroll Now
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col py-4 px-6 gap-4 z-50">
          <Link href="#" className="text-gray-600 font-medium">
            Courses
          </Link>
          <Link href="#" className="text-gray-600 font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-600 font-medium">
            Contact
          </Link>
          <hr className="border-gray-200" />
          <Link href="#" className="text-orange-500 font-semibold">
            Sign In
          </Link>
          <Link
            href="#"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold text-center hover:bg-orange-600 transition"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;