import { Search, Clock, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  thumbnail: string;
  rating: number;
  enrolled: number;
  category: string;
}

const courseList = async () => {
    const response = await fetch(
    "https://infnova-course-api.vercel.app/api/courses/",
    { cache: "no-store" }
  );

  const courses: Course[] = await response.json();
  return (
    <section className="w-full bg-gray-50">
        <div className="max-w-full mx-auto px-8 py-10">
          <div className="w-full md:w-full mx-auto bg-white border border-gray-200 shadow-sm rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 flex-1">
                <Search className="text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search courses, instructor"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              <input
                type="text"
                placeholder="Category"
                className="border border-gray-300 rounded-lg px-3 py-2 md:w-48 outline-none"
              />

              <input
                type="text"
                placeholder="Level"
                className="border border-gray-300 rounded-lg px-3 py-2 md:w-48 outline-none"
              />
            </div>
          </div>

          <p className="text-gray-600 text-left">
            Showing{" "}
            <span className="font-bold text-black">{courses.length}</span> of{" "}
            <span className="font-bold text-black">{courses.length}</span>{" "}
            courses
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const levelStyles =
                course.level === "Beginner"
                  ? "bg-green-100 text-green-600"
                  : course.level === "Intermediate"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-purple-100 text-purple-600";

              return (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer">
                    {/* Image */}
                    <div className="relative w-full h-48">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />

                      <span
                        className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${levelStyles}`}
                      >
                        {course.level}
                      </span>
                    </div>

                    <div className="p-4">
                      <p className="text-[#F54900] text-sm font-medium mb-1">
                        {course.category}
                      </p>

                      <h3 className="text-black font-semibold text-lg mb-2 line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-gray-500 text-sm mb-4">
                        Instructor: {course.instructor}
                      </p>

                      <hr className="border-gray-200 mb-4" />

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          <span>{course.enrolled}</span>
                        </div>

                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={16} fill="currentColor" />
                          <span className="text-gray-700">
                            {course.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default courseList