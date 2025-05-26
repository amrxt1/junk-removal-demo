function Container({ className = "", children }) {
  return <div className={`px-4 ${className}`}>{children}</div>;
}

export default Container;
