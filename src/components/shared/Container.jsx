function Container({ className = "", id = "", children }) {
  return (
    <div
      className={`px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ${className} `}
      id={id}
    >
      {children}
    </div>
  );
}

export default Container;
