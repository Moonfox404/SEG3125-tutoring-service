import ServiceCard from "@/app/components/ServiceCard";
import ServicePage from "@/app/page-templates/ServicePage";
import {
  faCalculator,
  faCompactDisc,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

const examReviewCards: { type: string; card: JSX.Element }[] = [
  {
    type: "uni",
    card: (
      <ServiceCard
        name={"CSI3131"}
        description={
          "June 20, 2025 @ University of Ottawa - Sometimes it feels like studying is a kernel-level instruction. Review with your peers in a session led by a computer engineering fourth year tutor."
        }
        icon={faCompactDisc}
        href={{
          pathname: "/book/reservation",
          query: {
            course: "CSI3131 - Operating Systems",
            date: "June 20, 2025",
            time: "4:00 PM – 6:00 PM",
            location: "CYB 105, University of Ottawa",
          },
        }}
        buttonText="Reserve a Seat"
      />
    ),
  },
  {
    type: "uni",
    card: (
      <ServiceCard
        name={"MAT1320"}
        description={
          "June 24, 2025 @ University of Ottawa - Still think derivatives were made up to ruin first years' happiness? \
        Come join like-minded individuals in a study session led by a second year applied math tutor and learn to integrate like a pro."
        }
        icon={faCalculator}
        href={{
          pathname: "/book/reservation",
          query: {
            course: "MAT1320 - Calculus 1",
            date: "June 24, 2025",
            time: "4:00 PM – 6:00 PM",
            location: "CRX 202, University of Ottawa",
          },
        }}
        buttonText="Reserve a Seat"
      />
    ),
  },
  {
    type: "uni",
    card: (
      <ServiceCard
        name={"ITI1100"}
        description={
          "June 26, 2025 @ University of Ottawa - If you feel like your attention starts being multiplexed whenever you sit down to study, \
        reviewing with other students can help you stay focused. Our third year software engineering tutor will take the group through \
        practice problems until the course material feels decoded."
        }
        icon={faComputer}
        href={{
          pathname: "/book/reservation",
          query: {
            course: "ITI1100 - Introduction to Computing",
            date: "June 26, 2025",
            time: "4:00 PM – 6:00 PM",
            location: "SITE 4004, University of Ottawa",
          },
        }}
        buttonText="Reserve a Seat"
      />
    ),
  },
  {
    type: "hs",
    card: (
      <ServiceCard
        name={"Advanced Functions"}
        description={
          "June 21, 2025 @ University of Ottawa - Meet students from across Ottawa and learn function graphing tricks from university students. \
        Tutors will also share general studying tips and tricks."
        }
        icon={faCalculator}
        href={{
          pathname: "/book/reservation",
          query: {
            course: "Advanced Functions",
            date: "June 21, 2025",
            time: "4:00 PM – 6:00 PM",
            location: "CRX 101, University of Ottawa",
          },
        }}
        buttonText="Reserve a Seat"
      />
    ),
  },
  {
    type: "hs",
    card: (
      <ServiceCard
        name={"Biology"}
        description={
          "June 20, 2025 @ University of Ottawa - Meet students from across Ottawa and learn all about cellular respiration from university students. \
        Tutors will also share general studying tips and tricks."
        }
        icon={faCalculator}
        href={{
          pathname: "/book/reservation",
          query: {
            course: "Biology",
            date: "June 20, 2025",
            time: "4:00 PM – 6:00 PM",
            location: "STM 1002, University of Ottawa",
          },
        }}
        buttonText="Reserve a Seat"
      />
    ),
  },
];

export default function ExamReviewServicePage() {
  return (
    <ServicePage
      service="exam-review"
      extraComponents={examReviewCards}
      extraComponentsHeading="Upcoming Review Sessions for this Month"
    />
  );
}
