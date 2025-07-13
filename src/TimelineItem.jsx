import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimelineItem = ({ title, description, date, image, side = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      x: side === "left" ? "-100%" : "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div
      ref={ref}
      className={`relative w-full md:w-1/2 px-4 py-20 ${
        side === "left" ? "md:self-start" : "md:self-end"
      }`}
    >
      {/* Garis & bulatan foto */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white border-4 bottom-68 border-pink-400 rounded-full z-10 shadow-lg flex items-center justify-center overflow-hidden">
        <img src={image} alt="event" className="w-full h-full object-cover rounded-full" />
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="bg-white shadow-xl rounded-3xl p-6 mt-10 border-l-4 md:border-l-0 md:border-t-4 border-pink-400 max-w-md mx-auto"
      >
        <p className="text-xs text-gray-500 italic mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-pink-600">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
