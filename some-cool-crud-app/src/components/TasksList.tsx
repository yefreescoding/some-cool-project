import { TasksLi } from "./TasksLi";

export const TasksList = () => {
  const tasks: {
    id: string;
    name: string;
    color: string;
    percent: number;
    category: "personal" | "work" | "academic" | "other";
  }[] = [
    {
      id: "00234501",
      name: "Search for a new job",
      color: "red",
      percent: 50,
      category: "work",
    },
    {
      id: "00234502",
      name: "Pick up the kids from school",
      color: "blue",
      percent: 30,
      category: "personal",
    },
    {
      id: "00234503",
      name: "Go to English class",
      color: "green",
      percent: 50,
      category: "academic",
    },
  ];

  return (
    <section className=" my-1 flex flex-col gap-8 mx-auto w-full max-w-[var(--app-with)] items-start sm:items-center sm:justify-center ">
      <ul id="tasks-list" className="flex flex-col w-full gap-2">
        {tasks.length === 0 ? (
          <h2 className="text-white p-4 text-center italic font-serif text-xl">
            No tasks
          </h2>
        ) : (
          tasks.map((task) => <TasksLi key={task.id} task={task} />)
        )}
      </ul>
    </section>
  );
};
