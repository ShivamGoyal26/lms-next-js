import { QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchCourses } from "../services/courses.service";

type useGetCoursesProps = {
  enabled?: boolean;
  queryKey: QueryKey;
  category?: string;
};

const useGetCourses = ({
  enabled = true,
  queryKey,
  category,
}: useGetCoursesProps) => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: queryKey,
    staleTime: Infinity,
    enabled: enabled,
    queryFn: ({ signal }) => fetchCourses({ signal, category }),
  });

  useEffect(() => {
    return () => {
      if (!query.isFetching) {
        queryClient.cancelQueries({ queryKey });
      }
    };
  }, [query.isFetching, queryClient, queryKey]);

  return query;
};

export default useGetCourses;
