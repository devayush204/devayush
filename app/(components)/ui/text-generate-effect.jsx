import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";

const TextGenerateEffect = ({ words, className }) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const animateWords = async () => {
      await controls.start("visible");
    };

    animateWords();
  }, [controls]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="flex items-center justify-center bg-blue-[#191919]">
        <div className="text-[60px] w-[100vw] h-[100vh] text-center tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="text-white"
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
