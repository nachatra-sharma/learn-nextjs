"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FiZap, FiShield, FiBarChart2 } from "react-icons/fi";

type FeatureDataType = {
  icon: IconType;
  title: string;
  description: string;
  content: string;
};

export const FeatureData: FeatureDataType[] = [
  {
    icon: FiZap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with optimized workflows.",
    content: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
  },
  {
    icon: FiShield,
    title: "Secure by Design",
    description: "Your data stays protected with modern security practices.",
    content: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
  },
  {
    icon: FiBarChart2,
    title: "Powerful Analytics",
    description: "Turn your data into meaningful insights with ease.",
    content: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
  },
];

const Feature = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#1b2432", "#0b132b", "#1d2e28"];
  const [background, setBackground] = useState(backgrounds[0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-neutral-900"
      ref={containerRef}
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className="my-60 flex flex-col gap-80">
        {FeatureData.map((data) => (
          <FeatureCard key={data.title} data={data} />
        ))}
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ data }: { data: FeatureDataType }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [350, -300]),
    {
      stiffness: 200,
      damping: 30,
      mass: 10,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const Icon = data.icon;
  return (
    <div className="grid grid-cols-2 items-center gap-10" ref={ref}>
      <motion.div
        className="flex flex-col gap-2"
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <Icon size={25} />
        </div>
        <h1 className="text-3xl font-semibold tracking-wide text-gray-200">
          {data.title}
        </h1>
        <p className="text-sm text-gray-200">{data.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        <Image
          src={data.content}
          width={500}
          height={200}
          alt="Feature Image"
        />
      </motion.div>
    </div>
  );
};

export default Feature;
