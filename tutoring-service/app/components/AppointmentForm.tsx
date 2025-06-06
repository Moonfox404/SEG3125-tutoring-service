"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

type AppointmentFormProps = {};

const AppointmentForm = ({}: AppointmentFormProps) => {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  return (
    <div className="w-full max-w-3xl mx-auto px-4 text-black">
      <form action="" className="flex flex-col gap-5">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              First name
            </legend>
            <input
              type="text"
              className="input w-full text-black placeholder:text-stone-300 text-sm md:text-base lg:text-lg"
              placeholder="John"
              required
            />
          </fieldset>

          {/* Last Name */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              Last name
            </legend>
            <input
              type="text"
              className="input w-full text-black placeholder:text-stone-300 text-sm md:text-base lg:text-lg"
              placeholder="Doe"
              required
            />
          </fieldset>
        </div>

        {/* Email */}
        <fieldset className="w-full">
          <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
            Email
          </legend>
          <label className="input w-full flex items-center gap-2 text-black placeholder:text-stone-300">
            <svg
              className="h-5 w-5 text-stone-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="w-full text-sm md:text-base lg:text-lg outline-none"
            />
          </label>
        </fieldset>

        <div className="flex flex-col gap-2">
          <div className="flex gap-10 justify-center max-sm:flex-col max-sm:self-center">
            <DayPicker
              className="react-day-picker w-fit md:text-base lg:text-lg "
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={`Selected date: ${
                date ? date.toLocaleDateString() : "Pick a date"
              }`}
              showOutsideDays
              captionLayout="dropdown"
              fixedWeeks
            />
            <div className="flex flex-col justify-evenly">
              <input
                type="time"
                className="input md:text-sm lg:text-base w-full"
                value={time}
                onChange={handleTimeChange}
              />

              <div className="sm:block hidden p-4 bg-blue-50 border border-blue-200 rounded-lg text-center text-blue-800 font-semibold text-lg shadow-sm">
                {date && time ? (
                  <>
                    <p>Confirm Date & Time</p>
                    <p className="text-blue-500">
                      {new Date(
                        `${date?.toDateString()} ${time}`
                      ).toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                        timeZoneName: "long",
                        timeZone: "America/Toronto",
                      })}
                    </p>

                    <p className="text-sm text-blue-600 mt-1">
                      Duration: 30 minutes
                    </p>
                  </>
                ) : (
                  <p>Please Select a Date and Time</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden block p-4 bg-blue-50 border border-blue-200 rounded-lg text-center text-blue-800 font-semibold text-lg shadow-sm">
          {date && time ? (
            <>
              <p>Confirm Date & Time</p>
              <p className="text-blue-500">
                {new Date(`${date?.toDateString()} ${time}`).toLocaleString(
                  "en-US",
                  {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                    timeZoneName: "long",
                    timeZone: "America/Toronto",
                  }
                )}
              </p>

              <p className="text-sm text-blue-600 mt-1">Duration: 30 minutes</p>
            </>
          ) : (
            <p>Please Select a Date and Time</p>
          )}
        </div>

        <fieldset className="fieldset flex justify-center">
          <div className="flex flex-col w-full">
            <textarea
              className="textarea w-[75%] self-center"
              placeholder="Message (optional)"
            ></textarea>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn m-5 bg-orange-400 hover:bg-orange-500 w-[25%] min-w-fit self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
