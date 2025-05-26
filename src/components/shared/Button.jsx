export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base = "px-4 py-2 rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-blue-800 text-white hover:bg-blue-900",
    accent: "bg-accent text-background",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
