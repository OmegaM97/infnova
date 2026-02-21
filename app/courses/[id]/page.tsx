import { Clock, Users, Medal, Star, ArrowLeft, BookOpen } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CourseDetail {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  thumbnail: string;
  skills: string[];
  enrolled: number;
  rating: number;
  category: string;
}

interface Props {
    params: {id: String}
}

const CourseDetailPage = async ({params}: Props) => {
    const { id } = await params
    const idNumber = Number(id);

  if (!idNumber || idNumber < 1 || idNumber > 8) {
    notFound();
  }
  const response = await fetch(`https://infnova-course-api.vercel.app/api/courses/${id}`, { cache: "no-store" })
  const course: CourseDetail = await response.json()

  const levelStyles =
    course.level === "Beginner"
      ? "bg-green-100 text-green-600"
      : course.level === "Intermediate"
        ? "bg-blue-100 text-blue-600"
        : "bg-purple-100 text-purple-600";

  return (
    <main className="max-w-full mx-auto py-3 bg-gray-50">
      <div className="mb-3 px-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
        <ArrowLeft size={18} />
        <Link href="/">Back to Courses</Link>
      </div>

      <section className="w-full bg-linear-to-r from-[#F54900] to-[#FF6900] shadow-sm flex flex-col md:flex-row overflow-hidden h-auto md:h-87.5">
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              {course.category}
            </p>

            <h1 className="text-white text-4xl md:text-4xl font-bold mb-2">
              {course.title}
            </h1>

            <p className="text-white text-lg mb-3">{course.description}</p>
          </div>

          <div className="flex flex-wrap gap-6 items-center text-white text-base">
            <div className="flex items-center gap-2">
              <Medal size={18} />
              <span>Instructor: {course.instructor}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>{course.enrolled}</span>
            </div>

            <div className="flex items-center gap-2 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="text-white">{course.rating}</span>
            </div>
          </div>

          <div className="mt-2">
            <span
              className={`text-sm md:text-base px-4 py-2 rounded-full ${levelStyles}`}
            >
              {course.level} Level
            </span>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center relative">
          <div className="relative w-[80%] h-[70%] mt-[10%]">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto px-8 py-10 flex flex-col md:flex-row gap-6">
        <div className="md:w-7/10 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-[#f54900]" />
              <h2 className="text-black font-semibold text-xl md:text-2xl">
                What You Will Learn
              </h2>
            </div>
            <ul className="space-y-3">
              {course.skills.slice(0, 3).map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-base md:text-lg"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm md:text-base">
                    ✓
                  </span>
                  <span className="text-gray-600">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-black font-semibold text-xl md:text-2xl mb-4">
              Course Description
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              {course.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F54900] flex items-center justify-center text-white font-bold text-xl md:text-2xl">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-black font-semibold text-lg md:text-xl">
                Instructor
              </h3>
              <p className="text-black text-base md:text-lg">
                {course.instructor}
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-3/10 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-4">
            <h2 className="text-black font-semibold text-xl md:text-2xl">
              Enroll Today
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Join <span className="font-semibold">{course.enrolled}</span> students
              enrolled
            </p>

            <button className="w-[90%] bg-[#F54900] text-white font-semibold py-3 rounded-lg text-base md:text-lg">
              Join Now
            </button>

            <button className="w-[90%] border border-[#F54900] text-[#F54900] font-semibold py-3 rounded-lg bg-white text-base md:text-lg">
              Add to Wishlist
            </button>

            <hr className="border-gray-200 my-4" />

            <h3 className="text-black font-semibold text-lg md:text-xl mb-3">
              This Course Includes
            </h3>
            <ul className="space-y-2">
              {[
                "Full Access",
                "Certificate of Completion",
                "Downloadable Resources",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base md:text-lg"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm md:text-base">
                    ✓
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailPage;
