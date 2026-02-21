import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}