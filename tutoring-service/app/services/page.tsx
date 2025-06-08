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
import { useStudentLevel } from "../context/StudentLevelContext";

export default function Services() {
  const { studentLevel, setStudentLevel } = useStudentLevel();

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

  return (
    <div className="w-full min-h-screen px-4 py-8 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-primary text-center max-md:text-2xl">
        Explore Our Core Services
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 text-center max-md:text-base">
        We offer a range of services designed to help you succeed at every stage
        of your academic journey
      </p>

      <div>
        <StudentLevelTabs />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center md:flex-row p-2 flex-wrap">
        {services.map((service, index) => {
          return !(
            studentLevel === "hs" && service.name === "Mentorship Workshops"
          ) ? (
            <ServiceCard key={index} {...service} />
          ) : null;
        })}
      </div>
    </div>
  );
}
