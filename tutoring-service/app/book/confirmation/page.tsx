import { faBook } from "@fortawesome/free-solid-svg-icons";
import BookConfirmation, {
  BookConfirmationProp,
} from "../../components/BookConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConfirmationPage({
  type,
  course,
  agent,
  date,
  time,
  duration,
  costPerHour,
  email,
}: BookConfirmationProp) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-primary text-2xl font-bold">
        {" "}
        <FontAwesomeIcon icon={faBook} size="xl" /> Booking Confirmation
      </h1>
      <BookConfirmation
        type={type}
        course={course}
        agent={agent}
        date={date}
        time={time}
        duration={duration}
        costPerHour={costPerHour}
        email={email}
      />

      <button className="btn bg-orange-500 hover:bg-orange-400 text-white rounded-box p-5 shadow-xl">
        <a href="#">Return Home</a>
      </button>
    </div>
  );
}
