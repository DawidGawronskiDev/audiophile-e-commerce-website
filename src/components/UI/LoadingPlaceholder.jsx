const LoadingPlaceholder = () => {
  return (
    <div className="*:bg-gray-300 *:animate-pulse *:rounded-lg mx-6 flex flex-col items-center justify-center gap-6">
      <div className="w-full h-96" />
      <div className="w-1/2 h-16" />
      <div className="w-full h-32" />
      <div className="w-1/4 h-16" />
    </div>
  );
};

export default LoadingPlaceholder;
