import ServiceCard from "@/app/components/ServiceCard";
import ServicePage from "@/app/page-templates/ServicePage";
import { faDice, faMugHot, faPuzzlePiece, faTableTennis } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";

const mentorshipCards: {type: string, card: JSX.Element}[] = [
  {
    type: 'uni',
    card: <ServiceCard
      name="First Years"
      description="Meeting dates are Mondays @ 18:00H - no commitment required. Meet new friends and get mentorship from older students."
      icon={faMugHot}
      href="/book/appointment?serviceType=Mentorship"
      buttonText="Join Group"
    />,
  },
  {
    type: 'uni',
    card: <ServiceCard
      name="Second Years"
      description="Meeting dates are Fridays @ 18:00H - no commitment required. Come chat about class over tea and board games. Meet graduating students to ask them about what the future might look like."
      icon={faDice}
      href="/book/appointment?serviceType=Mentorship"
      buttonText="Join Group"
    />,
  },
  {
    type: 'uni',
    card: <ServiceCard
      name="Third Years"
      description="Meeting dates are Mondays @ 18:00H - no commitment required. First year was a scary time. Connect with younger students so they don't make the same mistakes, play fun games, and maybe make some new friends."
      icon={faTableTennis}
      href="/book/appointment?serviceType=Mentorship"
      buttonText="Join Group"
    />,
  },
  {
    type: 'uni',
    card: <ServiceCard
      name="Fourth Years"
      description="Meeting dates are Fridays @ 18:00H - no commitment required. A lot of us wonder about whether we chose the right program around second year. Connect with younger students and share your experience, discover fun new activities, and maybe make new friends."
      icon={faPuzzlePiece}
      href="/book/appointment?serviceType=Mentorship"
      buttonText="Join Group"
    />,
  },
];

export default function MentorshipServicePage() {
  return <ServicePage service="mentorship" extraComponents={mentorshipCards} extraComponentsHeading="What Year are You?"/>
};
