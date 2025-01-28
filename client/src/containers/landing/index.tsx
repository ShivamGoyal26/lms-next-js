"use client";

import React from "react";
import { motion } from "framer-motion";

import useGetCourses from "./hooks/useGetCourses";
import CarouselBanner from "./_components/CarouselBanner";
import FeaturedSection from "./_components/FeaturedSection";
import LoadingSkeleton from "./_components/LoadingSkeleton";
import CourseListing from "./_components/CourseListing";

const Landing = () => {
  const queryKey = ["courses"];

  const { data, isFetching } = useGetCourses({
    enabled: true,
    queryKey: queryKey,
  });

  if (isFetching) return <LoadingSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <CarouselBanner />
      <FeaturedSection />
      <CourseListing courses={data?.data} />
    </motion.div>
  );
};

export default Landing;
