import PersonCard from "@/app/components/PersonCard";
import PhotoHeader from "@/app/components/PhotoHeader";
import { Consultations, Consultation } from "@/app/mock-data/Consultations";
import { MockConsultants, Consultant } from "@/app/mock-data/MockConsultants";

const getEarliestAvailablity = (consultant: Consultant) => {
  const today = new Date();
  const startIndex = today.getDay();

  for (let i = 0; i < 7; i++) {
    var date = consultant.availability[(startIndex + i) % 7];
    if (Object.keys(date).length != 0) {
      return `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(
        2,
        "0"
      )}/${String(today.getDate() + i).padStart(
        2,
        "0"
      )}  ${date.start?.getHours()}:00H`;
    }
  }
};

export default async function ConsultantsPage({
  params,
}: {
  params: Promise<{ consultation_type: string }>;
}) {
  const { consultation_type } = await params;

  const consultationInfo: Consultation | undefined = Consultations.find((c) => {
    return c.short === consultation_type;
  });

  if (!consultationInfo) {
    return (
      <div className="min-w-screen min-h-[80vh] flex justify-center items-center ">
        <h1>
          Unknown Consultation Type. Please return to{" "}
          <a
            href="/services/consultation"
            className="text-primary hover:text-blue-600"
          >
            Consultation
          </a>{" "}
          page.
        </h1>
      </div>
    );
  }

  const consultants = MockConsultants.filter((consultants) => {
    return consultation_type.match(consultants.consultables) != null;
  });

  return (
    <main className="grid">
      <div className="row mt-4">
        <PhotoHeader
          imgSrc={`/${consultationInfo.short}.jpg`}
          title={consultationInfo.name}
        >
          <div className="card-translucent p-2 md:w-100 lg:w-200">
            <h2 className="text-2xl text-primary m-5">
              {consultationInfo?.name}
            </h2>
            <p className="m-5">{consultationInfo?.description}</p>
          </div>
        </PhotoHeader>
      </div>
      <div className="row flex justify-center items-center">
        <h1 className="text-2xl text-primary mt-10">Available Consultants</h1>
      </div>
      <div
        className={`row grid md:grid-cols-2 xl:grid-cols-3 m-10 items-center`}
      >
        {consultants.map((consultant, index) => {
          const availability = getEarliestAvailablity(consultant);

          return (
            <div
              key={index}
              className="size-full flex justify-center items-start mx-1 my-3 sm:mx-3"
            >
              <PersonCard
                name={`${consultant.fname} ${consultant.lname}`}
                role={`${consultant.program} @ ${consultant.school}`}
                rating={5}
                bookable="Consultation"
                imgSrc={`/${consultant.fname}-${consultant.lname}-profile.png`}
              >
                <div className="flex flex-col justify-center items-start">
                  <p className="my-2">{consultant.description}</p>
                  <span className="text-primary">
                    Earliest availability: {availability}
                  </span>
                </div>
              </PersonCard>
            </div>
          );
        })}
      </div>
    </main>
  );
}
