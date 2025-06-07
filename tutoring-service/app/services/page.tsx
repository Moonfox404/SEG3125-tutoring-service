"use client";
import { useState } from "react";
import StudentLevelTabs from "../components/StudentLevelTabs";
import {
  faBook,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons/faLandmark";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  // Data for core services cards
  const services = [
    {
      icon: faBook,
      name: "Personalized Tutoring",
      description:
        "Gain valuable skills and insights from expert tutors for all levels.",
      href: "services/tutoring",
    },
    {
      icon: faUsers,
      name: "Mentorship Workshops",
      description:
        "Gain valuable skills and insight through interactive group sessions.",
      href: "services/mentorship",
    },
    {
      icon: faLandmark,
      name: "Exam Review Sessions",
      description:
        "Ace your exams with targeted review sessions and practice problems.",
      href: "services/exam-review",
    },
    {
      icon: faBriefcase,
      name: "Academic Consultations",
      description:
        "Seek academic help and guidance from experienced educational advisors.",
      href: "services/consultation",
    },
  ];
  const [selectedStudentType, setSelectedStudentType] = useState("uni");
  return (
    <div className="min-w-screen min-h-screen justify-center items-center flex flex-col">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-primary">
        Explore Our Core Services
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 text-center">
        We offer a range of services designed to help you succeed at every stage
        of your academic journey
      </p>

      <div>
        <StudentLevelTabs
          onToggle={() =>
            setSelectedStudentType(selectedStudentType === "uni" ? "hs" : "uni")
          }
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center md:flex-row p-2 flex-wrap">
        {services.map((service, index) => {
          return !(
            selectedStudentType === "hs" &&
            service.name === "Mentorship Workshops"
          ) ? (
            <ServiceCard key={index} {...service} />
          ) : null;
        })}
      </div>
    </div>
  );
}
