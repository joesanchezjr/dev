export default function TasksPageLoading() {
  return (
    <div className="max-width my-24">
      <div className="mx-auto max-w-md">
        <div className="mx-auto max-w-md">
          <div className="my-8">
            <div className="w-full ">
              <label className="mb-1 block text-xs" htmlFor="new-task">
                Create new task
              </label>
              <div className="flex animate-pulse flex-col gap-2 text-sm sm:flex-row">
                <div className="h-[34px] w-full rounded  bg-slate-200" />
                <div className="flex flex-shrink-0 flex-grow justify-end gap-2 sm:items-stretch">
                  <button
                    className="order-2 rounded border border-slate-600 bg-slate-600 px-2 py-1 text-white focus:outline-offset-2 sm:order-1"
                    type="submit"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <legend className="text-xl font-medium leading-6">Tasks</legend>
            </div>
            <div className="mt-4 divide-y divide-slate-200 border-b border-t border-gray-200">
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <div className="relative py-4" key={index}>
                    <div className="h-[21px] rounded bg-slate-200" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
