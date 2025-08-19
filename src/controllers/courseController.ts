import {
  getAllCourseService,
  getCourseByIdService,
} from "../services/courseService.js";

const getAllCourseController = async () => {
  try {
    const courses = await getAllCourseService();
    return courses;
  } catch (error) {
    throw error;
  }
};

const getCourseByIdController = async (id: string) => {
  try {
    // console.log(id);

    const course = await getCourseByIdService(id);
    return course;
  } catch (error) {
    throw error;
  }
};

export { getAllCourseController, getCourseByIdController };
