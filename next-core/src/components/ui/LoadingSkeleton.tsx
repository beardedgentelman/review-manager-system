const LoadingSkeleton = ({count}: { count: number }) => {
  return (
      <div className="auto-rows-auto h-full animate-pulse">
        {[...Array(count)].map((_, i) => (
            <div key={i} className="border m-4 rounded bg-gray-200 h-24"></div>
        ))}
      </div>
  );
}

export default LoadingSkeleton;