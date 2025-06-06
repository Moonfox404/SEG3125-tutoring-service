import PhotoHeader from "@/app/components/PhotoHeader"
import StudentLevelTabs from "@/app/components/StudentLevelTabs";
import Link from "next/link";

type Service = {
  name: string,
  brief: string,
  description: string,
  buttonText: string,
  buttonLink: string,
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
    buttonLink: "/services/tutoring/courses",
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
    buttonLink: "/services/mentorship/schedule",
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
    buttonLink: "/services/exam-review/schedule",
  }],
  ["consultation", {
    name: "Academic Consultations",
    brief: "$18 / hour",
    description: "\
      Expert guidance to help you craft a standout university application. \
      Get personalized advice for your target programs, including competitive fields like Engineering and Science.\
    ",
    buttonText: "See All Consulting Services",
    buttonLink: "services/consulting/all"
  }]
]);

const defaultService: Service = {
  name: "Service not Found",
  brief: "Oops, something went wrong!",
  description: "The service you are looking for does not exist.",
  buttonText: "Return to Home",
  buttonLink: "/",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params;
  const serviceInfo = services.get(service) ?? defaultService;
  const imgSrc = `/${service}-stock.jpg`

  return <main className="grid grid-rows-2 md:grid-rows-3">
    <div className="row md:row-span-2">
      <PhotoHeader title={serviceInfo.name} subtitle={serviceInfo.brief} imgSrc={imgSrc}>
        {serviceInfo === defaultService ? <></> :
          <StudentLevelTabs onToggle={
            (level) => {

            }
          } />}
      </PhotoHeader>
    </div>
    <div className="row md:row-span-1 flex flex-col items-center justify-around mx-10 sm:mx-20 lg:mx-40 my-2">
      <p>
        {serviceInfo.description}
      </p>
      <Link href={serviceInfo.buttonLink} className="btn btn-accent">{serviceInfo.buttonText}</Link>
    </div>
  </main>
}
