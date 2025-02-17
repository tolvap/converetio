export default function SkeletonConverter() {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm animate-pulse">
      {/* Title (Skeleton) */}
      <div className="h-7 bg-gray-200 rounded mb-4 w-40"></div>

      <div className="flex gap-3">
        {/* Left group: Select + Input */}
        <div className="flex items-center gap-2 mb-4">
          {/* UnitSelect skeleton (approx. same size as your actual select) */}
          <div className="min-w-40 h-[2.625rem] bg-gray-200 rounded" />

          {/* Input skeleton */}
          <div className="min-w-[11.5rem] flex-1 h-[2.625rem] bg-gray-200 rounded" />
        </div>

        {/* Right group: Input + Select */}
        <div className="flex items-center gap-2 mb-4">
          {/* Input skeleton */}
          <div className="min-w-[11.5rem] h-[2.625rem] bg-gray-200 rounded" />

          {/* UnitSelect skeleton */}
          <div className="min-w-40 h-[2.625rem] bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
