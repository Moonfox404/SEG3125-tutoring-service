"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type StudentLevel = "uni" | "hs";

type StudentLevelContextType = {
  studentLevel: StudentLevel;
  setStudentLevel: (level: StudentLevel) => void;
};

const StudentLevelContext = createContext<StudentLevelContextType | undefined>(
  undefined
);

export const useStudentLevel = () => {
  const context = useContext(StudentLevelContext);
  if (!context)
    throw new Error("useStudentLevel must be used within StudentLevelProvider");
  return context;
};

export const StudentLevelProvider = ({ children }: { children: ReactNode }) => {
  const [studentLevel, setStudentLevelState] = useState<StudentLevel>("uni");

  useEffect(() => {
    const saved = localStorage.getItem("studentLevel");
    if (saved === "hs" || saved === "uni") {
      setStudentLevelState(saved);
    }
  }, []);

  const setStudentLevel = (level: StudentLevel) => {
    localStorage.setItem("studentLevel", level);
    setStudentLevelState(level);
  };

  return (
    <StudentLevelContext.Provider value={{ studentLevel, setStudentLevel }}>
      {children}
    </StudentLevelContext.Provider>
  );
};
