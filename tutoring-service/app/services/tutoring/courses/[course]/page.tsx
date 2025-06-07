import PersonCard from "@/app/components/PersonCard";
import PhotoHeader from "@/app/components/PhotoHeader";
import { mockHSCourses, mockUniCourses } from "@/app/mock-data/MockCourses";
import { MockPeople, Person } from "@/app/mock-data/MockPeople";


const getEarliestAvailablity = (tutor: Person) => {
  const today = new Date();
  const startIndex = today.getDay();

  for (let i = 0; i < 7; i++) {
    var date = tutor.availability[(startIndex + i) % 7];
    if (Object.keys(date).length != 0) {
      return `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate() + i).padStart(2, '0')}  ${date.start?.getHours()}:00H`
    }
  }
};


export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>
}) {
  const { course } = await params;

  const courseInfo = mockUniCourses.find((c) => {
    return c.subject + c.code === course;
  }) ?? mockHSCourses.find((c) => {
    return c.subject + c.code + "U" === course;
  });

  const tutors = MockPeople.filter((tutor) => {
    return course.match(tutor.teachables) != null;
  })

  return (
    <main className="grid">
      <div className="row mt-4">
        <PhotoHeader imgSrc={`/${courseInfo?.subject}.png`} title={course}>
          <div className="card-translucent md:w-100 lg:w-200">
            <h2 className="text-2xl text-primary">{courseInfo?.name}</h2>
            <p>{courseInfo?.description}</p>
          </div>
        </PhotoHeader>
      </div>
      <div className={`row grid md:grid-cols-2 xl:grid-cols-3 m-10 items-center`}>
        {tutors.map((tutor, index) => {
          const availability = getEarliestAvailablity(tutor);

          return <div key={index} className="size-full flex justify-center items-start mx-1 my-3 sm:mx-3">
            <PersonCard
              name={`${tutor.fname} ${tutor.lname.charAt(0)}.`}
              role={`${tutor.program} @ ${tutor.school}`}
              rating={5}
              bookable="tutor"
              imgSrc={`/${tutor.fname}-${tutor.lname}-profile.png`}
            >
              <div className="flex flex-col justify-center items-start">
                <p className="my-2">{tutor.description}</p>
                <span className="text-primary">Earliest availability: {availability}</span>
              </div>
            </PersonCard>
          </div>
        })}
      </div>
    </main>
  )
};
