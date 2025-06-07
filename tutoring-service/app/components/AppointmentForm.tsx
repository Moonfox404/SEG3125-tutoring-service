"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useRouter, useSearchParams } from "next/navigation";

type AppointmentFormProps = {};

const serviceTypes = [
  "Consultation",
  "Mentorship",
  "Review",
  "Tutor",
  "General",
];

const isValidServiceType = (type: string) => {
  return serviceTypes.includes(type);
};

const AppointmentForm = ({}: AppointmentFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialServiceType = searchParams.get("serviceType");
  const initialAgent = searchParams.get("agent");
  const initialDuration = searchParams.get("duration");
  const initialCost = searchParams.get("costPerHour");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [serviceType, setServiceType] = useState(
    isValidServiceType(initialServiceType ?? "")
      ? initialServiceType
      : "General"
  );
  const [agent, setAgent] = useState(initialAgent || "Any Agent");
  const [duration, setDuration] = useState(
    initialDuration ? Number(initialDuration) : 60
  );
  const [costPerHour, setCostPerHour] = useState(
    initialCost ? Number(initialCost) : 20
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default page reload

    if (!date || !time || !firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create a URLSearchParams object to build the query string
    const params = new URLSearchParams({
      firstName,
      lastName,
      email,
      date: date.toISOString(),
      time,
      type: serviceType!,
      agent: agent,
      duration: String(duration),
      costPerHour: String(costPerHour),
    });

    // Add optional message if it exists
    if (message) {
      params.append("message", message);
    }

    // Redirect to the confirmation page with the data
    router.push(`/book/confirmation?${params.toString()}`);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  return (
    <div className="w-full max-w-3xl mx-auto px-4 text-black">
      {serviceType === "General" ? (
        <div className="text-bold text-base mb-5 text-center ">
          Note: This is a general appointment booking. Please head to our{" "}
          <a href="/services" className="text-blue-500 hover:text-blue-600">
            Services
          </a>{" "}
          page to view and select one of the services we offer!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </fieldset>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Service Type Dropdown */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              Service Type
            </legend>
            <select
              className="select w-full text-black text-sm md:text-base lg:text-lg"
              value={serviceType!}
              onChange={(e) => setServiceType(e.target.value)}
              disabled={serviceType === "General" ? true : false}
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Agent (Readonly) */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              Agent
            </legend>
            <input
              type="text"
              className="input w-full text-black placeholder:text-stone-300 text-sm md:text-base lg:text-lg bg-gray-100"
              value={agent}
              readOnly
            />
          </fieldset>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Duration (Number Input) */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              Duration (minutes)
            </legend>
            <input
              type="number"
              className="input w-full text-black text-sm md:text-base lg:text-lg"
              min="60"
              max="180"
              step="15"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              required
            />
          </fieldset>

          {/* Cost Per Hour (Readonly) */}
          <fieldset className="w-full">
            <legend className="text-base md:text-lg lg:text-xl mb-1 font-bold">
              Cost Per Hour
            </legend>
            <label className="input w-full flex items-center gap-2 text-black text-sm md:text-base lg:text-lg bg-gray-100">
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                value={costPerHour}
                readOnly
              />
              <span>CAD</span>
            </label>
          </fieldset>
        </div>

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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn m-5 bg-orange-400 hover:bg-orange-500 w-[25%] min-w-fit self-center text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
