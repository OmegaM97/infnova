export default function LoadingCourse() {
  return (
    <div className="px-6 md:px-10 py-10 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-48 mb-6" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-32" />
          <div className="h-10 bg-gray-200 rounded w-full" />
          <div className="h-20 bg-gray-200 rounded w-full" />
        </div>

        <div className="h-62.5 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}