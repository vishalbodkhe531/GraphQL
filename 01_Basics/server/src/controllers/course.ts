import { Course } from "@/models/course";

export const getCourses = async (req: Request, res: Response) => {
  const courses = await Course.find();
  return courses;
};
