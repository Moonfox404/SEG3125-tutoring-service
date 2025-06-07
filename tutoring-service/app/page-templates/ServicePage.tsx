"use client";

import PhotoHeader from "@/app/components/PhotoHeader"
import StudentLevelTabs from "@/app/components/StudentLevelTabs";
import Link from "next/link";
import { JSX, useState } from "react";

type Service = {
  name: string,
  brief: string,
  description: string,
  buttonText: string,
  buttonLink: string
};

const services: Map<string, Service> = new Map([
  ["tutoring", {
    name: "Tutoring",
    brief: "$18 / hour | One-on-One",
    description: " \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
      facilisis justo. Vestibulum blandit faucibus porttitor. \
      Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
    ",
    buttonText: "Available Courses",
    buttonLink: "tutoring/courses",
  }],
  ["mentorship", {
    name: "Mentorship Workshops",
    brief: "Free | Connect with Peers",
    description: " \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
      facilisis justo. Vestibulum blandit faucibus porttitor. \
      Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
    ",
    buttonText: "Upcoming Dates",
    buttonLink: "mentorship/schedule",
  }],
  ["exam-review", {
    name: "Exam Review Sessions",
    brief: "$14 / session | Group Study led by Tutors",
    description: " \
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
      facilisis justo. Vestibulum blandit faucibus porttitor. \
      Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
    ",
    buttonText: "Available Sessions",
    buttonLink: "exam-review/schedule",
  }],
  ["consultation", {
    name: "Academic Consultations",
    brief: "$18 / hour",
    description: "\
      Expert guidance to help you craft a standout university application. \
      Get personalized advice for your target programs, including competitive fields like Engineering and Science.\
    ",
    buttonText: "Book a General Consultation",
    buttonLink: "consultation/consultants"
  }]
]);

const defaultService: Service = {
  name: "Service not Found",
  brief: "Oops, something went wrong!",
  description: "The service you are looking for does not exist.",
  buttonText: "Return to Home",
  buttonLink: "/",
};

const ServicePage = ({
  service,
  extraComponents
}: {
  service: string,
  extraComponents?: {
    type: string,
    card: JSX.Element,
  }[]
}) => {
  const serviceInfo = services.get(service) ?? defaultService;
  const imgSrc = `/${service}-stock.jpg`;
  const hasExtra = Number(extraComponents != undefined);

  const [level, setLevel] = useState("uni");

  return <main className={`grid grid-rows-${2 + hasExtra} md:grid-rows-${3 + hasExtra}`}>
    <div className="row md:row-span-2 mt-5">
      <PhotoHeader title={serviceInfo.name} subtitle={serviceInfo.brief} imgSrc={imgSrc}>
        {serviceInfo === defaultService ? <></> :
          <StudentLevelTabs onToggle={(level) => setLevel(level)}/>}
      </PhotoHeader>
    </div>
    <div className="row md:row-span-1 flex flex-col items-center justify-around mx-10 sm:mx-20 lg:mx-40 my-5">
      <p>
        {serviceInfo.description}
      </p>
      {hasExtra ? null : <Link href={{pathname: serviceInfo.buttonLink, query: {level: level}}} className="btn btn-accent m-5">{serviceInfo.buttonText}</Link>}
    </div>
    {hasExtra ?
      <div className="row md:row-span-1 sm:px-20 lg:px-40 my-10 flex flex-col md:flex-row max-w-screen justify-center items-stretch flex-wrap">
        {extraComponents?.map(
          ({type, card}, index) => {
            return type === level ? <div key={index}>{card}</div> : <></>;
          }
        )}
      </div> : <></>
    }
  </main>
};

export default ServicePage;
