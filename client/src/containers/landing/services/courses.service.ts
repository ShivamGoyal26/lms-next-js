import { axiosInstance } from "@/api";

const endpoints = {
  fetchCourses: "/courses",
};

type fetchCoursesParams = {
  signal: AbortSignal;
  category?: string;
};

export const fetchCourses = async ({
  signal,
  category = "",
}: fetchCoursesParams) => {
  const response = await axiosInstance.get(`${endpoints.fetchCourses}`, {
    signal: signal,
    params: {
      category: category,
    },
  });
  return response;
};
