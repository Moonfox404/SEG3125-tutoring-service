"use client";

import PhotoHeader from "@/app/components/PhotoHeader";
import StudentLevelTabs from "@/app/components/StudentLevelTabs";
import Link from "next/link";
import { JSX, useState } from "react";

type Service = {
  name: string;
  brief: string;
  description: { uni: string, hs: string };
  buttonText: string;
  buttonLink: string;
};

const services: Map<string, Service> = new Map([
  [
    "tutoring",
    {
      name: "Tutoring",
      brief: "$18 / hour | One-on-One",
      description: {
        uni: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        ",
        hs: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        "
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
        uni: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        ",
        hs: " \
          Unfortunately, we currently do not offer mentorship workshops for high school students. \
          If you would like to ask a university student for advice, consider booking a consultation with us. \
        "
      },
      buttonText: "Back to All Services",
      buttonLink: "/services",
    },
  ],
  [
    "exam-review",
    {
      name: "Exam Review Sessions",
      brief: "$14 / session | Group Study led by Tutors",
      description: {
        uni: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        ",
        hs: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        "
      },
      buttonText: "Back to All Services",
      buttonLink: "/services",
    },
  ],
  [
    "consultation",
    {
      name: "Academic Consultations",
      brief: "$18 / hour",
      description: {
        uni: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        ",
        hs: " \
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut elit gravida, luctus erat scelerisque, \
          facilisis justo. Vestibulum blandit faucibus porttitor. \
          Aliquam rutrum mi lorem, pulvinar fringilla purus interdum vitae. Vivamus viverra vel nisi et mollis. \
        "
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
        hs: "The service you are looking for does not exist."
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
      className={`grid grid-rows-${2 + hasExtra} md:grid-rows-${3 + hasExtra
        }`}
    >
      <div className="row md:row-span-2 mt-5">
        <PhotoHeader
          title={serviceInfo.name}
          subtitle={serviceInfo.brief}
          imgSrc={imgSrc}
        >
          {serviceInfo === defaultService ? (
            <></>
          ) : (
            <StudentLevelTabs onToggle={(level) => setLevel(level)} />
          )}
        </PhotoHeader>
      </div>
      <div className="row md:row-span-1 flex flex-col items-center justify-around mx-10 sm:mx-20 lg:mx-40 my-5">
        <p>{serviceInfo.description[level as "uni" | "hs"]}</p>
        {hasExtra ? (
          null
        ) : (
          <Link href={{ pathname: serviceInfo.buttonLink, query: { level: level } }} className="btn btn-accent my-5">
            {serviceInfo.buttonText}
          </Link>
        )}
      </div>
      {hasExtra ? (
        <div className="row md:row-span-1 sm:px-20 lg:px-40 my-10">
          {
            extraComponentsHeading ? <h1 className="text-xl text-primary text-center mb-5">{extraComponentsHeading}</h1> : null
          }
          <div className="flex flex-col md:flex-row max-w-screen justify-center items-center md:items-stretch flex-wrap">
            {
              extraComponentsFiltered?.map(({ card }, index) => {
                return <div key={index} className="my-2">{card}</div>;
              })
            }
          </div>
        </div>
      ) : (
        null
      )}
    </main>
  );
};

export default ServicePage;
