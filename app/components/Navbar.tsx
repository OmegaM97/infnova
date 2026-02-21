import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/data/images/Logo (1).png"

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-8 text-gray-500 font-medium">
        <Link href="#">Courses</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
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
    </nav>
  );
};

export default Navbar;