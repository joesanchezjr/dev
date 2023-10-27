export default function Status() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-green-200 px-2 py-1 text-xs text-black dark:bg-green-800 dark:text-white">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
      </span>
      <span className="font-medium">Available for hire</span>
    </div>
  );
}

