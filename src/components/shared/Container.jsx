function Container({ className = "", id = "", children }) {
  return (
    <div className={`px-4 ${className}`} id={id}>
      {children}
    </div>
  );
}

export default Container;
