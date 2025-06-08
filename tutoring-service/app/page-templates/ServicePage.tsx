"use client";

import PhotoHeader from "@/app/components/PhotoHeader";
import StudentLevelTabs from "@/app/components/StudentLevelTabs";
import Link from "next/link";
import { JSX, Suspense, useState } from "react";

type Service = {
  name: string;
  brief: string;
  description: { uni: string; hs: string };
  buttonText: string;
  buttonLink: string;
};

const services: Map<string, Service> = new Map([
  [
    "tutoring",
    {
      name: "Tutoring",
      brief: "$25 / hour | One-on-One",
      description: {
        uni: "Get individualized support from experienced university peers who understand your program's demands. Whether it's coding, calculus, or critical writing, we tailor each session to your pace and goals.",
        hs: "Our tutors are high-achieving university students who explain concepts clearly and help you prepare for tests with confidence. Sessions are customized to match your curriculum and learning style.",
      },
      buttonText: "Available Courses",
      buttonLink: "tutoring/courses",
    },
  ],
  [
    "mentorship",
    {
      name: "Mentorship Workshops",
      brief: "Free | Connect with Peers",
      description: {
        uni: "Join peer-led workshops to gain insights on time management, studying smarter, and navigating your program. Our mentors have been through it—and they're here to share real advice that works.",
        hs: "Unfortunately, we currently do not offer mentorship workshops for high school students. If you would like to ask a university student for advice, consider booking a consultation with us.",
      },
      buttonText: "Back to All Services",
      buttonLink: "/services",
    },
  ],
  [
    "exam-review",
    {
      name: "Exam Review Sessions",
      brief: "$25 / session | Group Study led by Tutors",
      description: {
        uni: "Maximize your exam performance by reviewing common problem types and strategies with fellow students. Each session is led by a tutor and includes live Q&A and mock questions.",
        hs: "Get a head start on your exams with structured review sessions. Work through key topics, practice questions, and test-taking strategies—all in a supportive group setting.",
      },
      buttonText: "Back to All Services",
      buttonLink: "/services",
    },
  ],
  [
    "consultation",
    {
      name: "Academic Consultations",
      brief: "$25 / hour",
      description: {
        uni: "Not sure what course to take next? Struggling to balance school and life? Our experienced student advisors offer one-on-one sessions to help you make informed academic decisions.",
        hs: "Book a session with our academic consultants to discuss program options, study techniques, or ways to boost your grades. We'll help you prepare for university success.",
      },
      buttonText: "Book a General Consultation",
      buttonLink: "consultation/consultants",
    },
  ],
]);

const defaultService: Service = {
  name: "Service not Found",
  brief: "Oops, something went wrong!",
  description: {
    uni: "The service you are looking for does not exist.",
    hs: "The service you are looking for does not exist.",
  },
  buttonText: "Return to Home",
  buttonLink: "/",
};

const ServicePage = ({
  service,
  extraComponents,
  extraComponentsHeading,
}: {
  service: string;
  extraComponents?: {
    type: string;
    card: JSX.Element;
  }[];
  extraComponentsHeading?: string;
}) => {
  const serviceInfo = services.get(service) ?? defaultService;
  const imgSrc = `/${service}-stock.jpg`;

  const [level, setLevel] = useState("uni");
  const extraComponentsFiltered = extraComponents?.filter(({ type }) => {
    return type === level;
  });
  const hasExtra = Number(Boolean(extraComponentsFiltered?.length));

  return (
    <main
      className={`min-h-[80vh] grid grid-rows-${2 + hasExtra} md:grid-rows-${
        3 + hasExtra
      }`}
    >
      <div className="row md:row-span-2 mt-5">
        <PhotoHeader
          title={serviceInfo.name}
          subtitle={serviceInfo.brief}
          imgSrc={imgSrc}
        >
          {serviceInfo === defaultService ? (
            null
          ) : (
            <Suspense>
              <StudentLevelTabs onToggle={(level) => setLevel(level)} />
            </Suspense>
          )}
        </PhotoHeader>
      </div>
      <div className="row md:row-span-1 flex flex-col items-center justify-around mx-10 sm:mx-20 lg:mx-40 my-5">
        <p>{serviceInfo.description[level as "uni" | "hs"]}</p>
        {hasExtra ? null : (
          <Link
            href={{ pathname: serviceInfo.buttonLink, query: { level: level } }}
            className="btn btn-accent my-5"
          >
            {serviceInfo.buttonText}
          </Link>
        )}
      </div>
      {hasExtra ? (
        <div className="row md:row-span-1 sm:px-20 lg:px-40 my-10">
          {extraComponentsHeading ? (
            <h1 className="text-xl text-primary text-center mb-5">
              {extraComponentsHeading}
            </h1>
          ) : null}
          <div className="flex flex-col md:flex-row max-w-screen justify-center items-center md:items-stretch flex-wrap">
            {extraComponentsFiltered?.map(({ card }, index) => {
              return (
                <div key={index} className="my-2">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default ServicePage;
