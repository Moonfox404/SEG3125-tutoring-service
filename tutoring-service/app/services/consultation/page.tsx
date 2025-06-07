import ServiceCard from "@/app/components/ServiceCard";
import ServicePage from "@/app/page-templates/ServicePage";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

type Service = {
  name: string,
  short: string,
  description: string,
}

const hsServices: Service[] = [
  {
    name: "Post-Secondary Pathway Consulting",
    short: "pathway",
    description: "Seek guidance and support on finding the right path after highschool."
  },
  {
    name: "University Application Consulting",
    short: "uni-application",
    description: "Get help writing your University application or preparing for an interview."
  },
  {
    name: "General Consulting",
    short: "all",
    description: "Get general advice or help from a consultant."
  },
];

const uniServices: Service[] = [
  {
    name: "Graduate Applications Consulting",
    short: "graduate-application",
    description: "Get help writing your application or ask questions about the graduate studies process."
  },
  {
    name: "General Consulting",
    short: "all",
    description: "Get general advice or help from a consultant."
  },
];


const serviceCards = [
  ...uniServices.map(
    (value) => {
      return {
        type: "uni",
        card: <ServiceCard
          name={value.name}
          description={value.description}
          icon={faCouch}
          href={{ href: "consultation/consultants", query: { type: value.short } }} 
          buttonText="View Available Consultants"/>
      };
    }
  ),
  ...hsServices.map(
    (value) => {
      return {
        type: "hs",
        card: <ServiceCard
          name={value.name}
          description={value.description}
          icon={faCouch}
          href={{ href: "consultation/consultants", query: { type: value.short } }} 
          buttonText="View Available Consultants"/>
      };
    }
  )
]


export default function ConsultationServicePage() {
  return <ServicePage service="consultation" extraComponents={serviceCards}/>
};
