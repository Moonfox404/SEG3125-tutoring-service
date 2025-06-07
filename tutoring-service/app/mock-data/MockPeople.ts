/*NOTE: People were generated using Gemini*/

export type Person = {
  fname: string,
  lname: string,
  program: string,
  school: string,
  description: string,
  availability: { start?: Date, end?: Date }[],
  teachables: RegExp,
};

export const MockPeople: Person[] = [
  {
    fname: "Jane",
    lname: "Green",
    program: "Software Engineering",
    school: "University of Ottawa",
    description: "Jane has always loved math and wants to help more people understand it. \
      Her sessions are mostly guided practice problems with less of a focus on theory.",
    availability: [
      // Monday
      { start: new Date("2025-06-09T10:00:00"), end: new Date("2025-06-09T12:00:00") },
      // Tuesday
      { start: new Date("2025-06-10T14:00:00"), end: new Date("2025-06-10T16:00:00") },
      // Wednesday - No availability
      {},
      // Thursday
      { start: new Date("2025-06-12T09:00:00"), end: new Date("2025-06-12T11:00:00") },
      // Friday
      { start: new Date("2025-06-13T13:00:00"), end: new Date("2025-06-13T15:00:00") },
      // Saturday - No availability
      {},
      // Sunday
      { start: new Date("2025-06-15T11:00:00"), end: new Date("2025-06-15T13:00:00") }
    ],
    teachables: /(MAT|MCV|MHF|ICS|ITI).*/
  },
  {
    fname: "Emily",
    lname: "Chen",
    program: "Biomedical Engineering",
    school: "McMaster University",
    description: "Emily is passionate about applying engineering principles to healthcare challenges. She excels at explaining complex scientific concepts and enjoys working through design problems collaboratively. Her sessions focus on practical application and critical thinking.",
    availability: [
      {},  // Sun
      { start: new Date("2025-06-09T09:00:00"), end: new Date("2025-06-09T11:00:00") }, // Mon
      {}, // Tue
      { start: new Date("2025-06-11T13:00:00"), end: new Date("2025-06-11T15:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T10:00:00"), end: new Date("2025-06-13T12:00:00") }, // Fri
      { start: new Date("2025-06-14T10:00:00"), end: new Date("2025-06-14T12:00:00") }, // Sat
    ],
    teachables: /(MAT|MCV|MHF|BIO|SBI).*/
  },
  {
    fname: "David",
    lname: "Patel",
    program: "Business Administration",
    school: "Western University",
    description: "David is keen on helping others grasp business fundamentals and strategic thinking. He uses case studies and real-world examples to make learning engaging and relevant. His sessions emphasize problem-solving and presentation skills.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T10:00:00"), end: new Date("2025-06-10T12:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T15:00:00"), end: new Date("2025-06-12T17:00:00") }, // Thu
      { start: new Date("2025-06-13T09:00:00"), end: new Date("2025-06-13T11:00:00") }, // Fri
      { start: new Date("2025-06-14T14:00:00"), end: new Date("2025-06-14T16:00:00") }, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Sarah",
    lname: "Kim",
    program: "Psychology",
    school: "Queen's University",
    description: "Sarah enjoys exploring the complexities of human behaviour and cognition. She's great at breaking down psychological theories and concepts into digestible parts, making them relatable and easy to understand. Her sessions are interactive and encourage discussion.",
    availability: [
      { start: new Date("2025-06-15T10:00:00"), end: new Date("2025-06-15T12:00:00") },  // Sun
      { start: new Date("2025-06-09T14:00:00"), end: new Date("2025-06-09T16:00:00") }, // Mon
      { start: new Date("2025-06-10T09:00:00"), end: new Date("2025-06-10T11:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T10:00:00"), end: new Date("2025-06-12T12:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF|ANP|SBI).*/
  },
  {
    fname: "Michael",
    lname: "Wang",
    program: "Civil Engineering",
    school: "University of Waterloo",
    description: "Michael is proficient in structural analysis and design. He prefers to explain concepts through practical problems and encourages students to develop their own analytical skills. His sessions are geared towards hands-on learning.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T13:00:00"), end: new Date("2025-06-10T15:00:00") }, // Tue
      { start: new Date("2025-06-11T09:00:00"), end: new Date("2025-06-11T11:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T14:00:00"), end: new Date("2025-06-13T16:00:00") }, // Fri
      { start: new Date("2025-06-14T10:00:00"), end: new Date("2025-06-14T12:00:00") }, // Sat
    ],
    teachables: /(MAT|MCV|MHF|PHY|SPH|SCH).*/
  },
  {
    fname: "Jessica",
    lname: "Brown",
    program: "Nursing",
    school: "University of Toronto",
    description: "Jessica is dedicated to helping aspiring healthcare professionals. She focuses on clinical reasoning and practical skills, using real-life scenarios to enhance understanding. Her sessions are supportive and practical.",
    availability: [
      { start: new Date("2025-06-15T14:00:00"), end: new Date("2025-06-15T16:00:00") },  // Sun
      { start: new Date("2025-06-09T10:00:00"), end: new Date("2025-06-09T12:00:00") }, // Mon
      {}, // Tue
      { start: new Date("2025-06-11T16:00:00"), end: new Date("2025-06-11T18:00:00") }, // Wed
      { start: new Date("2025-06-12T10:00:00"), end: new Date("2025-06-12T12:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF|SBI|SCH|BIO|ANP).*/
  },
  {
    fname: "Kevin",
    lname: "Nguyen",
    program: "Economics",
    school: "York University",
    description: "Kevin finds joy in demystifying economic theories and models. He employs real-world news and policy examples to make abstract concepts concrete. His sessions encourage critical analysis and application of economic principles.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T11:00:00"), end: new Date("2025-06-10T13:00:00") }, // Tue
      { start: new Date("2025-06-11T10:00:00"), end: new Date("2025-06-11T12:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T10:00:00"), end: new Date("2025-06-13T12:00:00") }, // Fri
      { start: new Date("2025-06-14T13:00:00"), end: new Date("2025-06-14T15:00:00") }, // Sat
    ],
    teachables: /(MAT|MCV|MHF).*/
  },
  {
    fname: "Olivia",
    lname: "Johnson",
    program: "Environmental Science",
    school: "University of Guelph",
    description: "Olivia is passionate about environmental sustainability and understanding ecological systems. She uses engaging examples and case studies to illustrate environmental concepts and encourage a holistic understanding. Her sessions are thought-provoking and informative.",
    availability: [
      { start: new Date("2025-06-15T11:00:00"), end: new Date("2025-06-15T13:00:00") },  // Sun
      { start: new Date("2025-06-09T11:00:00"), end: new Date("2025-06-09T13:00:00") }, // Mon
      { start: new Date("2025-06-10T14:00:00"), end: new Date("2025-06-10T16:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T09:00:00"), end: new Date("2025-06-12T11:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(BIO|SBI|SCH).*/
  },
  {
    fname: "Daniel",
    lname: "Lee",
    program: "Architecture",
    school: "Toronto Metropolitan University",
    description: "Daniel enjoys guiding students through design principles and architectural history. He provides constructive feedback on projects and encourages creative problem-solving. His sessions are hands-on and concept-driven.",
    availability: [
      { start: new Date("2025-06-15T10:00:00"), end: new Date("2025-06-15T12:00:00") },  // Sun
      {}, // Mon
      {}, // Tue
      { start: new Date("2025-06-11T13:00:00"), end: new Date("2025-06-11T15:00:00") }, // Wed
      { start: new Date("2025-06-12T11:00:00"), end: new Date("2025-06-12T13:00:00") }, // Thu
      { start: new Date("2025-06-13T15:00:00"), end: new Date("2025-06-13T17:00:00") }, // Fri
      {}, // Sat
    ],
    teachables: /(PHY|SPH|FSF).*/
  },
  {
    fname: "Sophia",
    lname: "Gomez",
    program: "Journalism",
    school: "Carleton University",
    description: "Sophia helps students hone their writing and reporting skills. She emphasizes clear communication, ethical considerations, and impactful storytelling. Her sessions involve practical exercises and feedback on written work.",
    availability: [
      { start: new Date("2025-06-15T09:00:00"), end: new Date("2025-06-15T11:00:00") },  // Sun
      { start: new Date("2025-06-09T15:00:00"), end: new Date("2025-06-09T17:00:00") }, // Mon
      { start: new Date("2025-06-10T10:00:00"), end: new Date("2025-06-10T12:00:00") }, // Tue
      {}, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T11:00:00"), end: new Date("2025-06-13T13:00:00") }, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Ethan",
    lname: "White",
    program: "Mathematics",
    school: "University of Waterloo",
    description: "Ethan is adept at simplifying complex mathematical concepts and building strong foundational understanding. He emphasizes problem-solving strategies and encourages a deep comprehension of theory. His sessions are analytical and methodical.",
    availability: [
      {},  // Sun
      { start: new Date("2025-06-09T09:00:00"), end: new Date("2025-06-09T11:00:00") }, // Mon
      { start: new Date("2025-06-10T14:00:00"), end: new Date("2025-06-10T16:00:00") }, // Tue
      { start: new Date("2025-06-11T09:00:00"), end: new Date("2025-06-11T11:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T10:00:00"), end: new Date("2025-06-13T12:00:00") }, // Fri
      {}, // Sat
    ],
    teachables: /(MAT|MCV|MHF|ICS|ITI).*/
  },
  {
    fname: "Chloe",
    lname: "Dubois",
    program: "French Studies",
    school: "University of Ottawa",
    description: "Chloe is passionate about the French language and culture. She helps students improve their speaking, listening, reading, and writing skills through interactive exercises and authentic materials. Her sessions are engaging and immersive.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T13:00:00"), end: new Date("2025-06-10T15:00:00") }, // Tue
      { start: new Date("2025-06-11T10:00:00"), end: new Date("2025-06-11T12:00:00") }, // Wed
      { start: new Date("2025-06-12T14:00:00"), end: new Date("2025-06-12T16:00:00") }, // Thu
      {}, // Fri
      { start: new Date("2025-06-14T11:00:00"), end: new Date("2025-06-14T13:00:00") }, // Sat
    ],
    teachables: /(FSF).*/
  },
  {
    fname: "Ryan",
    lname: "Miller",
    program: "Kinesiology",
    school: "Brock University",
    description: "Ryan is enthusiastic about human movement and exercise science. He uses visual aids and practical demonstrations to explain anatomical and physiological concepts. His sessions are dynamic and focus on real-world applications.",
    availability: [
      {},  // Sun
      { start: new Date("2025-06-09T13:00:00"), end: new Date("2025-06-09T15:00:00") }, // Mon
      {}, // Tue
      { start: new Date("2025-06-11T09:00:00"), end: new Date("2025-06-11T11:00:00") }, // Wed
      { start: new Date("2025-06-12T16:00:00"), end: new Date("2025-06-12T18:00:00") }, // Thu
      {}, // Fri
      { start: new Date("2025-06-14T09:00:00"), end: new Date("2025-06-14T11:00:00") }, // Sat
    ],
    teachables: /(SBI|ANP).*/
  },
  {
    fname: "Isabella",
    lname: "Garcia",
    program: "Fine Arts (Painting)",
    school: "OCAD University",
    description: "Isabella is a talented artist who enjoys nurturing creativity in others. She provides guidance on artistic techniques, composition, and conceptual development. Her sessions are inspiring and focus on practical art-making.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T10:00:00"), end: new Date("2025-06-10T12:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T13:00:00"), end: new Date("2025-06-12T15:00:00") }, // Thu
      { start: new Date("2025-06-13T09:00:00"), end: new Date("2025-06-13T11:00:00") }, // Fri
      { start: new Date("2025-06-14T14:00:00"), end: new Date("2025-06-14T16:00:00") }, // Sat
    ],
    teachables: /(ENG).*/
  },
  {
    fname: "Noah",
    lname: "Clark",
    program: "Political Science",
    school: "University of Windsor",
    description: "Noah is passionate about political systems and international relations. He encourages critical thinking and debate, using current events to illustrate theoretical concepts. His sessions are engaging and discussion-based.",
    availability: [
      { start: new Date("2025-06-15T10:00:00"), end: new Date("2025-06-15T12:00:00") },  // Sun
      { start: new Date("2025-06-09T10:00:00"), end: new Date("2025-06-09T12:00:00") }, // Mon
      { start: new Date("2025-06-10T15:00:00"), end: new Date("2025-06-10T17:00:00") }, // Tue
      {}, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T13:00:00"), end: new Date("2025-06-13T15:00:00") }, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Mia",
    lname: "Martinez",
    program: "Nutrition and Food Science",
    school: "Ryerson University", // Now Toronto Metropolitan University
    description: "Mia is knowledgeable about healthy eating and food systems. She offers practical advice and explains the science behind nutrition in an accessible way. Her sessions are informative and focused on practical applications.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T09:00:00"), end: new Date("2025-06-10T11:00:00") }, // Tue
      { start: new Date("2025-06-11T14:00:00"), end: new Date("2025-06-11T16:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T10:00:00"), end: new Date("2025-06-13T12:00:00") }, // Fri
      { start: new Date("2025-06-14T10:00:00"), end: new Date("2025-06-14T12:00:00") }, // Sat
    ],
    teachables: /(BIO|SBI|SCH).*/
  },
  {
    fname: "Liam",
    lname: "Taylor",
    program: "History",
    school: "Trent University",
    description: "Liam has a deep understanding of historical events and their impact. He encourages critical analysis of sources and helps students develop strong argumentative essays. His sessions are research-focused and analytical.",
    availability: [
      { start: new Date("2025-06-15T14:00:00"), end: new Date("2025-06-15T16:00:00") },  // Sun
      { start: new Date("2025-06-09T11:00:00"), end: new Date("2025-06-09T13:00:00") }, // Mon
      {}, // Tue
      { start: new Date("2025-06-11T10:00:00"), end: new Date("2025-06-11T12:00:00") }, // Wed
      { start: new Date("2025-06-12T13:00:00"), end: new Date("2025-06-12T15:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Grace",
    lname: "Wilson",
    program: "Chemistry",
    school: "Laurentian University",
    description: "Grace simplifies complex chemical reactions and theories. She focuses on step-by-step problem-solving and conceptual understanding. Her sessions are systematic and aim to build confidence in chemistry.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T10:00:00"), end: new Date("2025-06-10T12:00:00") }, // Tue
      { start: new Date("2025-06-11T15:00:00"), end: new Date("2025-06-11T17:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T09:00:00"), end: new Date("2025-06-13T11:00:00") }, // Fri
      { start: new Date("2025-06-14T11:00:00"), end: new Date("2025-06-14T13:00:00") }, // Sat
    ],
    teachables: /(SCH|SBI|SPH|BIO).*/
  },
  {
    fname: "Ben",
    lname: "Harris",
    program: "Philosophy",
    school: "University of Toronto",
    description: "Ben loves to explore philosophical ideas and encourages critical thinking about life's big questions. He facilitates discussions and helps students develop strong analytical and argumentative skills. His sessions are thought-provoking and engaging.",
    availability: [
      { start: new Date("2025-06-15T13:00:00"), end: new Date("2025-06-15T15:00:00") },  // Sun
      { start: new Date("2025-06-09T14:00:00"), end: new Date("2025-06-09T16:00:00") }, // Mon
      { start: new Date("2025-06-10T11:00:00"), end: new Date("2025-06-10T13:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T10:00:00"), end: new Date("2025-06-12T12:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Lily",
    lname: "Zhao",
    program: "Computer Engineering",
    school: "University of Waterloo",
    description: "Lily is enthusiastic about hardware and software integration. She guides students through circuit design, programming concepts, and debugging techniques. Her sessions are practical and project-oriented.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T16:00:00"), end: new Date("2025-06-10T18:00:00") }, // Tue
      { start: new Date("2025-06-11T11:00:00"), end: new Date("2025-06-11T13:00:00") }, // Wed
      {}, // Thu
      { start: new Date("2025-06-13T14:00:00"), end: new Date("2025-06-13T16:00:00") }, // Fri
      { start: new Date("2025-06-14T09:00:00"), end: new Date("2025-06-14T11:00:00") }, // Sat
    ],
    teachables: /(MAT|MCV|MHF|ICS|ITI|SPH|PHY).*/
  },
  {
    fname: "Sam",
    lname: "Kowalski",
    program: "Music (Performance)",
    school: "Wilfrid Laurier University",
    description: "Sam is a talented musician who enjoys helping others develop their performance skills and musical understanding. He provides guidance on technique, theory, and interpretation. His sessions are encouraging and practical.",
    availability: [
      { start: new Date("2025-06-15T10:00:00"), end: new Date("2025-06-15T12:00:00") },  // Sun
      { start: new Date("2025-06-09T09:00:00"), end: new Date("2025-06-09T11:00:00") }, // Mon
      { start: new Date("2025-06-10T13:00:00"), end: new Date("2025-06-10T15:00:00") }, // Tue
      {}, // Wed
      { start: new Date("2025-06-12T11:00:00"), end: new Date("2025-06-12T13:00:00") }, // Thu
      {}, // Fri
      {}, // Sat
    ],
    teachables: /(ENG|FSF).*/
  },
  {
    fname: "Chloe",
    lname: "Adams",
    program: "English Literature",
    school: "University of Guelph",
    description: "Chloe is passionate about literature and helping students articulate their ideas. She focuses on close reading, critical analysis, and developing strong essay writing skills. Her sessions are engaging and foster intellectual growth.",
    availability: [
      {},  // Sun
      {}, // Mon
      { start: new Date("2025-06-10T10:00:00"), end: new Date("2025-06-10T12:00:00") }, // Tue
      { start: new Date("2025-06-11T13:00:00"), end: new Date("2025-06-11T15:00:00") }, // Wed
      { start: new Date("2025-06-12T09:00:00"), end: new Date("2025-06-12T11:00:00") }, // Thu
      {}, // Fri
      { start: new Date("2025-06-14T15:00:00"), end: new Date("2025-06-14T17:00:00") }, // Sat
    ],
    teachables: /(ENG|FSF).*/
  }
]
