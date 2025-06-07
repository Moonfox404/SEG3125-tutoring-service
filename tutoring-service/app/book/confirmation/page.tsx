import { faBook } from "@fortawesome/free-solid-svg-icons";
import BookConfirmation, {
  BookConfirmationProp,
} from "../../components/BookConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ConfirmationPageProps = {
  searchParams: {
    type: "Mentorship" | "Tutor" | "Review" | "Consultation";
    course?: string;
    agent: string;
    date: string; // Date will be a string from the URL
    time: string;
    duration: string; // Duration will be a string
    costPerHour: string; // Cost will be a string
    email: string;
  };
};

export default function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const confirmationProps: BookConfirmationProp = {
    type: searchParams.type || "Consultation", // Provide a default
    course: searchParams.course,
    agent: searchParams.agent || "N/A",
    date: new Date(searchParams.date), // Convert string back to Date object
    time: searchParams.time,
    duration: Number(searchParams.duration), // Convert string to number
    costPerHour: Number(searchParams.costPerHour), // Convert string to number
    email: searchParams.email,
  };
  console.log(searchParams);
  return (
    <div className="min-w-screen min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-primary text-2xl font-bold">
        {" "}
        <FontAwesomeIcon icon={faBook} size="xl" /> Booking Confirmation
      </h1>
      <BookConfirmation {...confirmationProps} />

      <button className="btn bg-orange-500 hover:bg-orange-400 text-white rounded-box p-5 shadow-xl">
        <a href="/">Return Home</a>
      </button>
    </div>
  );
}
