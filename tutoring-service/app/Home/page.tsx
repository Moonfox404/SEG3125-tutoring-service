"use client";

import {
  faBook,
  faBriefcase,
  faUsers,
  IconName,
} from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons/faLandmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import ReviewCard from "../components/ReviewCard";

export default function HomePage() {
  const [selectedStudentType, setSelectedStudentType] = useState("University");

  // Data for core services cards
  const services = [
    {
      icon: faBook,
      name: "Personalized Tutoring",
      description:
        "Gain valuable skills and insights from expert tutors for all levels.",
      href: "#",
    },
    {
      icon: faUsers,
      name: "Mentorship Workshops",
      description:
        "Gain valuable skills and insight through interactive group sessions.",
      href: "#",
    },
    {
      icon: faLandmark,
      name: "Exam Review Sessions",
      description:
        "Ace your exams with targeted review sessions and practice problems.",
      href: "#",
    },
    {
      icon: faBriefcase,
      name: "Academic Consultations",
      description:
        "Seek academic help and guidance from experienced educational advisors.",
      href: "#",
    },
  ];

  // Data for testimonial cards
  const testimonials = [
    {
      rating: 5,
      message:
        "The personalized lessons for Physics was a game-changer! I felt so much more confident going into my final.",
      name: "Jessica L.",
      role: "University Student",
    },
    {
      rating: 5,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi qui distinctio quam non, illum autem minima vero similique reiciendis sint corrupti earum eos odit laudantium aliquam temporibus voluptas harum!",
      name: "Eric C.",
      role: "University Student",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-screen bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden px-6 md:px-20 flex flex-row justify-between">
        {/* Right-side Image */}
        <div className="absolute right-0 bottom-0 flex max-[930px]:hidden items-end h-[90%] w-[50vw]">
          <Image
            src="/student_transparent_image.png"
            alt="Student holding books"
            fill
            className="object-bottom-right object-contain scale-x-[-1] h-auto w-auto max-h-full"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Unlock Your Potential. <br /> Achieve Your Dreams.
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl mb-8">
            Expert tutoring, mentorship, and application guidance tailored for
            high school and university success.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:bg-orange-400 transition duration-300 cursor-pointer">
              Explore Our Services
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
        {/* "I am in..." Section */}
        <div className="flex flex-col items-center mb-16 w-full max-w-lg">
          <p className="text-gray-700 text-lg mb-4">I am in...</p>
          <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex space-x-2">
            <button
              onClick={() => setSelectedStudentType("University")}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                selectedStudentType === "University"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              University
            </button>
            <button
              onClick={() => setSelectedStudentType("High School")}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                selectedStudentType === "High School"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              High School
            </button>
          </div>
        </div>

        {/* "Our Core Services" Section */}
        <section className="w-full max-w-6xl mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            We offer a range of services designed to help you succeed at every
            stage of your academic journey
          </p>
          <div className="flex flex-col gap-5 justify-center items-center md:flex-row p-2 flex-wrap">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* "What Our Students Say" Section */}
        <section className="w-full max-w-6xl text-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Real Stories from students who've achieved their goals with us!
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl border border-gray-200 mb-12">
            <p className="text-2xl italic text-gray-700 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center md:flex-row p-2 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} {...testimonial}>
                <p>{testimonial.message}</p>
              </ReviewCard>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
