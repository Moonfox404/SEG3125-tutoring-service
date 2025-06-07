type BookConfirmation = {
  course: string;
  tutor: string;
  date: Date;
  time: string;
  duration: number; // minutes
  costPerHour: number;
  email: string;
};

const BookConfirmation = ({
  course,
  tutor,
  date,
  time,
  duration,
  costPerHour,
  email,
}: BookConfirmation) => {
  return (
    <div className="p-5 bg-blue-600 rounded-box text-white min-w-[280px] max-w-[60vw] shadow-xl">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center mb-10 font-bold">
        Booking Successful
      </h1>

      <div className="flex flex-col gap-10 sm:text-base md:text-lg">
        <div>
          <div className="flex justify-between">
            <p>Course:</p>
            <p>{course}</p>
          </div>

          <div className="flex justify-between">
            <p>Tutor:</p>
            <p>{tutor}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Date:</p>
            <p>
              {new Date(`${date?.toDateString()}`).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex justify-between">
            <p>Starting time:</p>
            <p>{time}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Duration: </p>
            <p>{duration} Minutes</p>
          </div>

          <div className="flex justify-between">
            <p>Cost: </p>
            <p>{Math.round((duration / 60) * costPerHour * 100) / 100} CAD</p>
          </div>
        </div>

        <p className="px-5">
          A copy of your session details have been sent to: <br />{" "}
          <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
};

export default BookConfirmation;
