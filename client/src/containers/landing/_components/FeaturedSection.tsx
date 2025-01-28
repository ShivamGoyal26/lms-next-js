import { motion } from "framer-motion";
import React from "react";

const FeaturedSection = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3, once: true }}
      className="landing__featured"
    >
      <h2 className="landing__featured-title">Featured Courses</h2>
      <p className="landing__featured-description">
        From beginner to advanced, in all industries, we have the right courses
        just for you and preparing your entire journey for learning and making
        the most.
      </p>

      <div className="landing__tags">
        {[
          "web development",
          "enterprise IT",
          "react nextjs",
          "javascript",
          "backend development",
        ].map((tag, index) => (
          <span key={index} className="landing__tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedSection;
