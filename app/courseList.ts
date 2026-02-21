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

// lib/courseDetail.ts

export interface CourseDetail {
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

// Example course (you can replace with backend data later)
export const courseDetailExample: CourseDetail = {
  id: "1",
  title: "Full Stack Web Development Bootcamp",
  description:
    "Become a job-ready full stack developer by mastering modern web technologies. Learn how to build scalable applications used by startups across Africa, from responsive frontends to production-grade backend systems.",
  instructor: "Lidetu Tadesse",
  level: "Intermediate",
  duration: "12 weeks",
  thumbnail:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  skills: ["React", "Node.js", "PostgreSQL", "REST APIs", "Authentication", "Docker"],
  enrolled: 3124,
  rating: 4.9,
  category: "Web Development",
};

export const courses: Course[] = [{"id":"1","title":"Full Stack Web Development Bootcamp","instructor":"Lidetu Tadesse","level":"Intermediate","duration":"12 weeks","thumbnail":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80","rating":4.9,"enrolled":3124,"category":"Web Development"},{"id":"2","title":"Practical Machine Learning","instructor":"Bereket Tesfaye Kebede","level":"Advanced","duration":"10 weeks","thumbnail":"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80","rating":4.8,"enrolled":1742,"category":"Data Science"},{"id":"3","title":"UI/UX Design for Modern Products","instructor":"Hana Alemayehu","level":"Beginner","duration":"8 weeks","thumbnail":"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80","rating":4.7,"enrolled":2891,"category":"Design"},{"id":"4","title":"Cloud Engineering with AWS","instructor":"Samuel Getachew","level":"Intermediate","duration":"9 weeks","thumbnail":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80","rating":4.6,"enrolled":2015,"category":"Cloud Computing"},{"id":"5","title":"Mobile App Development with Flutter","instructor":"Natnael Desta","level":"Intermediate","duration":"10 weeks","thumbnail":"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80","rating":4.8,"enrolled":2563,"category":"Mobile Development"},{"id":"6","title":"Cybersecurity Foundations","instructor":"Meklit Girma","level":"Beginner","duration":"6 weeks","thumbnail":"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80","rating":4.7,"enrolled":1489,"category":"Security"},{"id":"7","title":"Data Analytics with Python","instructor":"Abel Hailu","level":"Beginner","duration":"7 weeks","thumbnail":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80","rating":4.8,"enrolled":2674,"category":"Data Science"},{"id":"8","title":"Blockchain & Fintech Systems","instructor":"Yonas Bekele","level":"Advanced","duration":"11 weeks","thumbnail":"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80","rating":4.5,"enrolled":1321,"category":"Blockchain"}];