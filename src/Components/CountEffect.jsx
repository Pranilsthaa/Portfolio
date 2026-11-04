import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountEffect = ({ from = 0, to = 100, duration = 1, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <motion.div ref={ref} className="flex items-center">
      {count}
      {suffix}
    </motion.div>
  );
};

export default CountEffect;
