/* COPYRIGHT NOTICE - All course descriptions are taken directly from the Universit of Ottawa website (university) and Ontario Curriculum (highschool) */

export type Course = {
  subject: string,
  code: number,
  name: string,
  description: string,
};

export const mockUniCourses: Course[] = [
  {
    subject: "MAT",
    code: 1300,
    name: "Mathematical Methods I",
    description: "Review of elementary functions. Limits. Geometric series. \
      Differential and integral calculus in one variable with applications. \
      Functions of several variables. Partial derivatives.",
  },
  {
    subject: "MAT",
    code: 1320,
    name: "Calculus I",
    description: "Intuitive definition of limits; continuity, statement of intermediate value theorem. \
      Quick review of basic derivative formulas: products, chain rule, exponentials, and trigonometric functions. \
      Derivatives of quotients, logarithms, inverse trigonometric functions. Finite difference approximations of derivatives. \
      Analysis of functions via the first and the second derivatives; statements of extreme and mean value theorems. \
      L'Hospital's rule. Implicit differentiation, related rates, optimization, linear approximation, Newton s method. \
      The definite integral and the fundamental theorem of calculus. Antiderivatives of elementary functions, techniques of integration \
      (integration by parts, substitutions, partial fractions). Numerical integration: mid-point, trapezoidal rule and Simpson's rule; error analysis.",
  },
  {
    subject: "MAT",
    code: 1322,
    name: "Calculus II",
    description: "Improper integrals. Applications of the integral. Separable differential equations. \
      Euler's method for differential equations. Sequences, series. Taylor's formula and series. \
      Functions of two and three variables. Partial derivatives, the chain rule, directional derivatives, tangent planes and normal lines.",
  },
  {
    subject: "MAT",
    code: 1341,
    name: "Introduction to Linear Algebra",
    description: "Review of complex numbers. The fundamental theorem of algebra. Review of vector and scalar products, projections. \
      Introduction to vector spaces, linear independence, bases; function spaces. \
      Solution of systems of linear equations, matrix algebra, determinants, eigenvalues and eigenvectors. \
      Gram Schmidt, orthogonal projections. Linear transformations, kernel and image, their standard matrices. \
      Applications (e.g. geometry, networks, differential equations)",
  },
  {
    subject: "MAT",
    code: 1348,
    name: "Discrete Mathematics for Computing",
    description: "Introduction to discrete structures as a foundation to computing. Propositional logic. \
      Fundamental structures: functions, relations, sets. The basics of counting: counting arguments, the pigeonhole principle, permutations and combinations. \
      Introduction to proofs: direct, by contradiction, by cases, induction. Topics in graph theory: isomorphism, cycles, trees, directed graphs.",
  },
  {
    subject: "MAT",
    code: 1362,
    name: "Mathematical Reasoning and Proofs",
    description: "Elements of logic, set theory, functions, equivalence relations and cardinality. Proof techniques. \
      Concepts are introduced using sets of integers, integers modulo n, rational, real and complex numbers. \
      Exploration of the real line: completeness, supremum, sequences and limits. \
      Some of the concepts will be illustrated with examples from geometry, algebra and number theory.",
  },
  {
    subject: "MAT",
    code: 1372,
    name: "Elements of Probability and Statistical Inference",
    description: "Probability distributions. Law of large numbers and the central limit theorem. Sampling. \
      Applications of probability. Testing with the normal, t and chi-square distributions. Correlation and regression.",
  },
  {
    subject: "PHY",
    code: 1112,
    name: "Introduction to Computational Physics",
    description: "This course introduces students to the fundamentals of computational physics. \
      Introduction to coding including data types, data structures and classes, operators, functions, control flow. \
      Debugging and testing. Working with elementary math functions and scientific data, including storage, data visualization, data analysis and linear regression. \
      Vector and matrix operations. Introduction to numerical methods in physics including differentiation, integration, solving ordinary differential equations, \
      simple Monte Carlo techniques and optimization.",
  },
  {
    subject: "PHY",
    code: 1121,
    name: "Fundamentals of Physics I",
    description: "Kinematics, reference frames, and relative motion. Newton's laws of motion, forces and fields. Work and energy. \
      Impulse and momentum. Systems of several particles and rigid bodies. Rotational dynamics. Oscillatory motion. \
      A first course intended primarily for students in the physical sciences and engineering",
  },
  {
    subject: "PHY",
    code: 1122,
    name: "Fundamentals of Physics II",
    description: "Heat and thermodynamics. Hydrostatics and hydrodynamics. Geometrical optics. Wave theory, Physical optics. Electrostatics. \
      Direct current circuits. A second course intended primarily for students in the physical sciences and engineering.",
  },
  {
    subject: "PHY",
    code: 1321,
    name: "Principles of Physics I",
    description: "Kinematics and particle dynamics. Energy and work. Momentum and impulse. Rotational motion. Heat and thermodynamics. \
      Fluid mechanics. A first course intended primarily for students in the life sciences.",
  },
  {
    subject: "PHY",
    code: 1322,
    name: "Principles of Physics II",
    description: "Electric field and potential. Capacitance. Electric current. DC electric circuits. Harmonic motion and waves. Optics. \
      Introduction to modern physics: Atomic physics, Bohr model, photoelectric effect. A second course intended primarily for students in the life sciences.",
  },
  {
    subject: "BIO",
    code: 1130,
    name: "Introduction to Organismal Biology",
    description: "Survey of the evidence for, and the fundamentals underlying the evolution of biological diversity. \
      Topics include: Mechanisms of natural selection and speciation, major trends and changes in biotic diversity and extinction of organisms over time; \
      organismal interactions at the population and community levels, including human impacts on the structure and function of ecological systems.",
  },
  {
    subject: "BIO",
    code: 1140,
    name: "Introduction to Cell and Molecular Biology",
    description: "Origin of life. Structure and varieties of cells. The cytoskeleton and the extracellular matrix. \
      Movements within and by cells including muscles. The cell cycle and reproduction. \
      The fundamentals of molecular biology including replication, transcription and translation. Membrane transport.",
  },
  {
    subject: "ANP",
    code: 1105,
    name: "Human Anatomy and Physiology I",
    description: "An introduction to tissue and cell morphology, biochemistry of the cell and physiological concepts including diffusion, \
      osmosis and membrane transport mechanisms. Anatomy and physiology of cardiovascular, blood, lymphatic and respiratory systems. \
      Introduction to the control mechanisms: concepts of homeostasis, nervous and endocrine systems.",
  },
  {
    subject: "ANP",
    code: 1106,
    name: "Human Anatomy and Physiology II",
    description: "Anatomy of the skeleton, including the axial and appendicular skeleton. Anatomy and physiology of skeletal muscles of the trunk and limbs. \
      Anatomy and physiology of the nervous system including receptors, the sensory and motor pathways, the lower and higher functions of the central nervous system.",
  },
  {
    subject: "ANP",
    code: 1107,
    name: "Human Anatomy and Physiology III",
    description: "Anatomy and physiology of the endocrine regulation of metabolism, the digestive system, \
      the reproductive system, and the urinary system; acid/base and water balance.",
  },
  {
    subject: "ITI",
    code: 1100,
    name: "Digital Systems I",
    description: "Digital computers and information. Number systems and alphanumeric codes. Binary arithmetic. Boolean algebra. \
      Logic functions representation, minimization and realization. Analysis, design and implementation of combinational circuits. \
      Basic sequential circuits. Latches and flip-flops. Analysis and design of simple sequential circuits. \
      Registers and counters. Implementation of digital circuits.",
  },
  {
    subject: "ITI",
    code: 1120,
    name: "Introduction to Computing I",
    description: "Problem solving and algorithm design. Basic principles of software engineering: structure decomposition, documentation, testing and debugging. \
      Variable types, expressions and assignment. Conditional and iterative control structures. Modules and parameter passing. \
      Recursion. Fundamental data structures: arrays, strings, matrices, records. Introduction to objects. \
      Includes examples of applications in various disciplines, including engineering.",
  },
  {
    subject: "ITI",
    code: 1121,
    name: "Introduction to Computing II",
    description: "Object-oriented programming. Abstraction principles: information hiding and encapsulation. \
      Linked lists, stacks, queues, binary search trees. Iterative and recursive processing of data structures. Virtual machines.",
  },
];

export const mockHSCourses: Course[] = [
  {
    subject: "MHF",
    code: 4,
    name: "Advanced Functions",
    description: "Investigate the properties of polynomial, rational, logarithmic, and trigonometric functions; develop techniques for combining functions; \
      broaden understanding of rates of change; and develop facility in applying these concepts and skills. \
      Refine use of the mathematical processes necessary for success in senior mathematics."
  },
  {
    subject: "MCV",
    code: 4,
    name: "Calculus and Vectors",
    description: "Solve problems involving geometric and algebraic representations of vectors and representations of lines and planes in three-dimensional space;\
      broaden understanding of rates of change to include the derivatives of polynomial, sinusoidal, exponential, rational, and radical functions; \
      and apply these concepts and skills to the modelling of real-world relationships."
  },
  {
    subject: "SBI",
    code: 4,
    name: "Biology",
    description: "Opportunity for in-depth study of the concepts and processes that occur in biological systems. \
      Study theory and conduct investigations in the areas of biochemistry, metabolic processes, molecular genetics, homeostasis, and population dynamics."
  },
  {
    subject: "SCH",
    code: 4,
    name: "Chemistry",
    description: "Deepen understanding of chemistry through the study of organic chemistry, the structure and properties of matter, \
      energy changes and rates of reaction, equilibrium in chemical systems, and electrochemistry"
  },
  {
    subject: "SPH",
    code: 4,
    name: "Physics",
    description: "Deepen understanding of physics concepts and theories. Explore energy transformations and the forces that affect motion, \
      and investigate electrical, gravitational, and magnetic fields and electromagnetic radiation. \
      Explore the wave nature of light, quantum mechanics, and special relativity."
  },
  {
    subject: "ENG",
    code: 4,
    name: "English",
    description: "A consolidation of the literacy, communication, and critical and creative thinking skills necessary for success in academic and daily life. \
      Analyse a range of challenging literary texts from various periods, countries, and cultures; \
      interpret and evaluate informational and graphic texts; and create oral, written, and media texts in a variety of forms."
  },
  {
    subject: "FSF",
    code: 4,
    name: "Core French",
    description: "Extensive opportunities for students to speak and interact in French independently. \
      Develop listening, speaking, reading, and writing skills, apply language learning strategies in a wide variety of real-life situations, \
      and develop creative and critical thinking skills through responding to and interacting with a variety of oral and written texts."
  },
  {
    subject: "ICS",
    code: 4,
    name: "Computer Science",
    description: "Develop knowledge and skills in computer science. Use modular design principles to create complex and fully documented programs, \
      according to industry standards. Manage a large software development project, from planning through to project review. \
      Analyse algorithms for effectiveness."
  },
];
