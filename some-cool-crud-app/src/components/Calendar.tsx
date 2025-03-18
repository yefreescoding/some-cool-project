export const Calendar = () => {
  const date = new Date();
  const calendar = {
    day: String(date.getDate()).padStart(2, "0"),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    year: date.getFullYear(),
  };

  // Get local time (HH:MM)
  const localTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Get Madrid time
  const madridTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const formattedDate = `${calendar.day}.${calendar.month}`;
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );

  return (
    <section className="overflow-auto bg-[#BDE7F3] my-1  rounded-4xl flex items-center justify-between gap-2 mx-auto w-full max-w-[var(--app-with)] px-4 py-2">
      <div className="text-right px-4 border-r-1 border-blue-800">
        <h3 className=" text-gray-600">{dayName}</h3>
        <div className="text-2xl text-gray-800 font-semibold">
          {formattedDate}
        </div>
        <div className="text-3xl text-gray-800 font-bold leading-tight">
          {calendar.year}
        </div>
      </div>
      <div className="text-gray-500 flex-2  px-4  flex gap-8 items-center justify-center">
        <div className="flex items-center text-2xl font-normal">
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
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <p>25Cº</p>
        </div>
        <div className="flex items-center  text-2xl">
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
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
          <p>11%</p>
        </div>
        <div className="flex items-center text-2xl">
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
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>

          <p>06:37 PM</p>
        </div>
      </div>
      <div className="px-4 border-l-1 border-blue-800 flex flex-col gap-2 items-start justify-center">
        <div>
          <p className="text-xl text-gray-800">{localTime}</p>
          <p className="text-xs text-gray-500">NY, USA.</p>
        </div>
        <div>
          <p className="text-xl text-gray-800">{madridTime}</p>
          <p className="text-xs text-gray-500">MD, Spa.</p>
        </div>
      </div>
    </section>
  );
};
