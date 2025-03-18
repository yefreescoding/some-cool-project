export const TaskSummary = () => {
  const category = ["personal", "work", "academic"];

  return (
    <div className=" bg-green-200 rounded-4xl flex flex-col items-start justify-between gap-2 mx-auto w-full max-w-[var(--app-with)] px-4 py-8">
      <div>
        <h2 className="font-bold text-lg">Current tasks</h2>
        <p className="flex flex-col text-4xl font-semibold text-gray-800">
          <span>
            You have <span>3 tasks</span>
          </span>
          <span>tasks for today</span>
        </p>
      </div>
      <div className=" mt-4 border-t-1 border-green-800/50 w-full flex gap-8 items-center justify-start">
        {category.map((category) => (
          <button
            key={category}
            className="cursor-pointer text-green-800/50 hover:text-green-800 transition-all"
          >
            # {category}
          </button>
        ))}
      </div>
    </div>
  );
};
