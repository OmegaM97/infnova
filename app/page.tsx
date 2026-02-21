import CourseList from "./CourseList";

const HomePage = async () => {

  return (
    <main>
      <section className="w-full bg-linear-to-r from-[#F54900] to-[#FF6900]">
        <div className="max-w-full mx-auto px-8 py-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
            Explore our courses
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </section>
      <CourseList />
    </main>
  );
};

export default HomePage;