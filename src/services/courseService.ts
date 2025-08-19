import Course from "../models/Course.js";

const getAllCourseService = async () => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCourseByIdService = async (id: string) => {
  try {
    const course = await Course.findById(id);
    return course;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAllCourseService, getCourseByIdService };
