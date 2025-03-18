import { useState, useEffect } from "react";

export const Hero = () => {
  const user = {
    name: "user001",
    avatar: "/images/logo-app.png",
  };

  const [showMiniNav, setShowMiniNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMiniNav(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const watcher = document.getElementById("watcher");
    if (watcher) observer.observe(watcher);

    return () => {
      if (watcher) observer.unobserve(watcher);
    };
  }, []);

  return (
    <main className="py-8 px-4 mb-1 bg-white rounded-b-4xl flex flex-col gap-8 mx-auto w-full max-w-[var(--app-with)] items-start sm:items-center sm:justify-center ">
      <section className="mb-2">
        <h1 className="mt-2 flex flex-col items-start sm:items-center gap-2 text-left md:text-center">
          <div className="flex flex-col items-start sm:items-center gap-2 text-4xl md:text-5xl font-semibold text-primary">
            <span>Welcome Back</span>
            <div className="text-orange-400 flex items-start sm:items-center gap-2">
              <span>{user.name}</span>
              <img
                className="group-hover:rotate-25 w-12 h-12 object-cover bg-gray-300 p-0.5 rounded-full transition-all"
                src={user.avatar}
                alt={`${user.name} avatar`}
              />
            </div>
          </div>
          <span className="mt-4  text-3xl md:text-4xl italic text-gray-400 font-extralight font-serif">
            What do you get to do today?
          </span>
        </h1>
      </section>
      <section className="w-full">
        <div className="flex gap-2 items-center md:justify-center">
          <button
            type="button"
            className="cursor-pointer w-full md:w-fit bg-orange-100 hover:bg-orange-200 flex items-center justify-between gap-2 text-xl text-orange-800 rounded-full px-4 py-2 transition-all"
          >
            Add Task
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <a
            href="#tasks-list"
            className="w-full md:w-fit bg-gray-100 hover:bg-gray-200 flex items-center justify-between gap-2 text-xl text-gray-800 rounded-full px-4 py-2 transition-all"
          >
            View Task
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
        </div>
      </section>
      <div id="watcher"></div>
      <div className="mini-nav" data-show={showMiniNav}>
        <div className="flex items-center gap-2 text-sm">
          <img
            className="group-hover:rotate-25 w-12 h-12 object-cover bg-gray-300 p-0.5 rounded-full transition-all"
            src={user.avatar}
            alt={`${user.name} avatar`}
          />
          <div className="flex flex-col items-start text-sm">
            <h2>
              Hi
              <span className="text-orange-400"> {user.name}</span>
            </h2>
            <p>Welcome Back</p>
          </div>
        </div>
        <button
          type="button"
          className="cursor-pointer w-fit bg-orange-100 hover:bg-orange-200 flex items-center justify-between gap-2 text-base text-orange-800 rounded-full px-2 py-1 transition-all"
        >
          Add Task
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};
