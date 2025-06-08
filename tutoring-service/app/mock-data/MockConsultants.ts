export type Consultant = {
  fname: string;
  lname: string;
  program: string;
  school: string;
  description: string;
  availability: { start?: Date; end?: Date }[];
  consultables: RegExp;
};

export const MockConsultants: Consultant[] = [
  {
    fname: "Jane",
    lname: "Green",
    program: "Software Engineering",
    school: "University of Ottawa",
    description:
      "As a recent graduate from a competitive engineering program, Jane has fresh and relevant experience to guide students through the university application process, from choosing the right school to acing the interview. She is passionate about helping the next generation of students find their path in STEM.",
    availability: [
      // Monday
      {
        start: new Date("2025-06-09T10:00:00"),
        end: new Date("2025-06-09T12:00:00"),
      },
      // Tuesday
      {
        start: new Date("2025-06-10T14:00:00"),
        end: new Date("2025-06-10T16:00:00"),
      },
      // Wednesday - No availability
      {},
      // Thursday
      {
        start: new Date("2025-06-12T09:00:00"),
        end: new Date("2025-06-12T11:00:00"),
      },
      // Friday
      {
        start: new Date("2025-06-13T13:00:00"),
        end: new Date("2025-06-13T15:00:00"),
      },
      // Saturday - No availability
      {},
      // Sunday
      {
        start: new Date("2025-06-15T11:00:00"),
        end: new Date("2025-06-15T13:00:00"),
      },
    ],
    consultables: /(GC|GAC|UAC|PSPC).*/,
  },
  {
    fname: "David",
    lname: "Lee",
    program: "Master of Business Administration (MBA)",
    school: "University of Toronto",
    description:
      "Currently completing his MBA, David has firsthand experience in the rigorous application process for graduate business schools. He is adept at helping students articulate their career goals and craft compelling application narratives. David is the perfect consultant for those looking to pursue graduate studies in business or related fields.",
    availability: [
      // Monday
      {
        start: new Date("2025-06-09T18:00:00"),
        end: new Date("2025-06-09T20:00:00"),
      },
      // Tuesday - No availability
      {},
      // Wednesday
      {
        start: new Date("2025-06-11T17:00:00"),
        end: new Date("2025-06-11T19:00:00"),
      },
      // Thursday
      {
        start: new Date("2025-06-12T18:00:00"),
        end: new Date("2025-06-12T20:00:00"),
      },
      // Friday - No availability
      {},
      // Saturday
      {
        start: new Date("2025-06-14T10:00:00"),
        end: new Date("2025-06-14T13:00:00"),
      },
      // Sunday - No availability
      {},
    ],
    consultables: /(GAC|GC).*/,
  },
  {
    fname: "Aisha",
    lname: "Khan",
    program: "Health Sciences",
    school: "McMaster University",
    description:
      "Aisha is a fourth-year Health Sciences student with a passion for mentorship. She has a strong track record of helping high school students navigate the complex world of post-secondary options, especially in competitive health-related programs. Her strengths lie in essay editing and interview preparation.",
    availability: [
      // Monday - No availability
      {},
      // Tuesday
      {
        start: new Date("2025-06-10T11:00:00"),
        end: new Date("2025-06-10T14:00:00"),
      },
      // Wednesday
      {
        start: new Date("2025-06-11T15:00:00"),
        end: new Date("2025-06-11T17:00:00"),
      },
      // Thursday
      {
        start: new Date("2025-06-12T11:00:00"),
        end: new Date("2025-06-12T14:00:00"),
      },
      // Friday
      {
        start: new Date("2025-06-13T16:00:00"),
        end: new Date("2025-06-13T18:00:00"),
      },
      // Saturday - No availability
      {},
      // Sunday
      {
        start: new Date("2025-06-15T14:00:00"),
        end: new Date("2025-06-15T17:00:00"),
      },
    ],
    consultables: /(UAC|PSPC|GC).*/,
  },
  {
    fname: "Tom",
    lname: "Nguyen",
    program: "PhD in Clinical Psychology",
    school: "Western University",
    description:
      "As a PhD candidate, Tom has an in-depth understanding of the academic journey from undergraduate studies to doctoral research. He offers a calm and structured approach to help students with their graduate school applications, particularly for thesis-based programs. Tom can provide invaluable advice on securing recommendation letters and research opportunities.",
    availability: [
      // Monday
      {
        start: new Date("2025-06-09T09:00:00"),
        end: new Date("2025-06-09T11:00:00"),
      },
      // Tuesday - No availability
      {},
      // Wednesday
      {
        start: new Date("2025-06-11T09:00:00"),
        end: new Date("2025-06-11T11:00:00"),
      },
      // Thursday - No availability
      {},
      // Friday
      {
        start: new Date("2025-06-13T09:00:00"),
        end: new Date("2025-06-13T11:00:00"),
      },
      // Saturday
      {
        start: new Date("2025-06-14T12:00:00"),
        end: new Date("2025-06-14T15:00:00"),
      },
      // Sunday - No availability
      {},
    ],
    consultables: /(GAC).*/,
  },
  {
    fname: "Fatima",
    lname: "Al-Jamil",
    program: "Political Science",
    school: "University of British Columbia",
    description:
      "Fatima is a passionate advocate for the arts and social sciences. She excels at helping high school students discover their interests and translate them into a compelling university application. Her own experience moving across the country for her studies gives her a unique perspective on choosing the right school.",
    availability: [
      // Monday
      {
        start: new Date("2025-06-09T13:00:00"),
        end: new Date("2025-06-09T16:00:00"),
      },
      // Tuesday
      {
        start: new Date("2025-06-10T17:00:00"),
        end: new Date("2025-06-10T19:00:00"),
      },
      // Wednesday
      {
        start: new Date("2025-06-11T13:00:00"),
        end: new Date("2025-06-11T16:00:00"),
      },
      // Thursday - No availability
      {},
      // Friday
      {
        start: new Date("2025-06-13T10:00:00"),
        end: new Date("2025-06-13T12:00:00"),
      },
      // Saturday - No availability
      {},
      // Sunday
      {
        start: new Date("2025-06-15T18:00:00"),
        end: new Date("2025-06-15T21:00:00"),
      },
    ],
    consultables: /(PSPC|UAC|GC).*/,
  },
  {
    fname: "Ben",
    lname: "Carter",
    program: "Commerce",
    school: "Queen's University",
    description:
      "A final-year Commerce student, Ben has sharp insight into the competitive application processes for business programs. He offers practical advice on building a strong extracurricular profile and preparing for case-based interviews, making him a great resource for high school and university students alike.",
    availability: [
      // Monday - No availability
      {},
      // Tuesday
      {
        start: new Date("2025-06-10T09:00:00"),
        end: new Date("2025-06-10T11:00:00"),
      },
      // Wednesday
      {
        start: new Date("2025-06-11T19:00:00"),
        end: new Date("2025-06-11T21:00:00"),
      },
      // Thursday
      {
        start: new Date("2025-06-12T16:00:00"),
        end: new Date("2025-06-12T18:00:00"),
      },
      // Friday - No availability
      {},
      // Saturday
      {
        start: new Date("2025-06-14T11:00:00"),
        end: new Date("2025-06-14T14:00:00"),
      },
      // Sunday - No availability
      {},
    ],
    consultables: /(GC|UAC|PSPC).*/,
  },
  {
    fname: "Chloe",
    lname: "Dubois",
    program: "Master of Fine Arts (MFA)",
    school: "Concordia University",
    description:
      "As an MFA candidate, Chloe specializes in helping students prepare portfolios and applications for creative arts programs. She understands the unique requirements of these applications and can guide students in showcasing their artistic talents effectively. Her expertise is ideal for those applying to graduate arts programs.",
    availability: [
      // Monday
      {
        start: new Date("2025-06-09T11:00:00"),
        end: new Date("2025-06-09T14:00:00"),
      },
      // Tuesday - No availability
      {},
      // Wednesday
      {
        start: new Date("2025-06-11T11:00:00"),
        end: new Date("2025-06-11T14:00:00"),
      },
      // Thursday
      {
        start: new Date("2025-06-12T13:00:00"),
        end: new Date("2025-06-12T16:00:00"),
      },
      // Friday - No availability
      {},
      // Saturday
      {
        start: new Date("2025-06-14T15:00:00"),
        end: new Date("2025-06-14T18:00:00"),
      },
      // Sunday - No availability
      {},
    ],
    consultables: /(GAC|GC).*/,
  },
];
