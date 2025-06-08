export type Consultation = {
  name: string;
  short: string;
  description: string;
};

export const Consultations: Consultation[] = [
  {
    name: "General Consultation",
    short: "GC",
    description:
      "Perfect for when you need quick advice or have a few questions. This flexible session allows you to get general help from a consultant on any academic or career-related topic.",
  },
  {
    name: "Post-Secondary Pathway Consultation",
    short: "PSPC",
    description:
      "Designed for high school students feeling unsure about their next steps. This service provides guidance and support on finding the right path after graduation, whether it's university, college, or another vocational route.",
  },
  {
    name: "University Application Consultation",
    short: "UAC",
    description:
      "Get targeted support to make your university application shine. Our consultants can help you brainstorm and refine personal essays, prepare for interviews, and strategically present your extracurriculars to stand out to admissions committees.",
  },
  {
    name: "Graduate Applications Consultation",
    short: "GAC",
    description:
      "Aimed at university students pursuing higher education. Get expert assistance in crafting a compelling application for your Master's or PhD program, from writing your statement of purpose to asking critical questions about the graduate studies process.",
  },
];
