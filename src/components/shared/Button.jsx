import { motion } from "motion/react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick = () => {
    console.log("no fn() assigned lol :p");
  },
  ...props
}) {
  const base = "px-4 py-2 rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-blue-800 text-white hover:bg-blue-900",
    accent: "bg-accent text-background",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
