// components/ParallaxImageScroller.jsx
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ParallaxImageScroller({ images, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 10,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`scroll-${index}`}
            className="h-96 w-auto object-cover "
          />
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, index) => (
          <img
            key={`dup-${index}`}
            src={img}
            alt={`scroll-dup-${index}`}
            className="h-96 w-auto object-cover "
          />
        ))}
      </motion.div>
    </div>
  );
}
