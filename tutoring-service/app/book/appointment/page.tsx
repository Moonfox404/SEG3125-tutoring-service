import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../../components/AppointmentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppointmentPage() {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-primary text-2xl font-bold">
        {" "}
        <FontAwesomeIcon icon={faCalendar} size="xl" /> Appointment
      </h1>
      <AppointmentForm />
    </div>
  );
}
