import { useState } from "react";

import { LiCategoryBadge } from "./LiCategoryBadge.tsx";

interface TasksLiProps {
  task: {
    id: string;
    name: string;
    color: string;
    percent: number;
    category: "personal" | "work" | "academic" | "other";
  };
}

export const TasksLi = ({ task }: TasksLiProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li
      id={task.id}
      className="task-card relative w-full bg-white rounded-4xl"
      data-state={isChecked ? "done" : ""}
    >
      <div className={`card-task-done ${isChecked ? "done" : ""}`}>
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#615FFF"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">{task.name}</h3>
        <p className="text-lg text-gray-500">
          Congrats on finishing your task!
        </p>
      </div>
      <div className="flex justify-between items-center gap-8 mb-4">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            {task.name}
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button
          className="cursor-pointer aspect-square w-18 flex items-center justify-center bg-black text-white hover:bg-white hover:text-black rounded-full px-4 py-2 transition-all"
          type="button"
          onClick={handleCheckboxChange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
      <div>
        <LiCategoryBadge category={task.category} />
        <div className="relative bg-gray-200 w-full h-8 rounded-full ">
          <div
            style={{ width: `${task.percent}%` }}
            className="transition-all rounded-full w-[0%] h-full p-1 px-4 bg-linear-to-t from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/50"
          ></div>
          <div className="absolute left-[50%] top-1 margin-auto text-white">
            {task.percent}%
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center gap-2 text-sm">
        <button
          type="button"
          className="cursor-pointer w-full bg-gray-100 hover:bg-red-200 flex items-center justify-center gap-2 text-base text-gray-800 rounded-xl px-3 py-2 transition-all"
        >
          Delete Task
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <button
          type="button"
          className="cursor-pointer w-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center gap-2 text-base text-blue-800 rounded-xl px-3 py-2 transition-all"
        >
          Edit Task
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
