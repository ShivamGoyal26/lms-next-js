import { motion } from "framer-motion";

import CourseCardSearch from "@/components/CourseCardSearch";
import { useRouter } from "next/navigation";

type CourseListingProps = {
  courses: Course[];
};

const CourseListing = ({ courses }: CourseListingProps) => {
  const router = useRouter();

  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`, {
      scroll: false,
    });
  };

  return (
    <div className="landing__courses">
      {courses &&
        courses.slice(0, 4).map((course, index) => (
          <motion.div
            key={course.courseId}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ amount: 0.4 }}
          >
            <CourseCardSearch
              course={course}
              onClick={() => handleCourseClick(course.courseId)}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default CourseListing;
