import { faBook } from "@fortawesome/free-solid-svg-icons";
import BookConfirmation, {
  BookConfirmationProp,
} from "../../components/BookConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cookies } from "next/headers";
import Link from "next/link";

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

export default async function ConfirmationPage() {
  const cookieStore = cookies();
  const bookingDataCookie = (await cookieStore).get("bookingData");
  if (!bookingDataCookie) {
    return (
      <div className="min-w-screen min-h-screen flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-red-500 text-2xl font-bold">
          No Booking Data Found
        </h1>
        <p>Please make an appointment first.</p>
        <Link href="/book/appointment" className="btn bg-orange-500 text-white">
          Go to Appointment Page
        </Link>
      </div>
    );
  }

  const data = JSON.parse(bookingDataCookie.value);

  const confirmationProps: BookConfirmationProp = {
    type: data.serviceType,
    course: data.course,
    agent: data.agent,
    date: new Date(data.date), // Convert string back to Date object
    time: data.time,
    duration: Number(data.duration),
    costPerHour: Number(data.costPerHour),
    email: data.email,
  };

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
