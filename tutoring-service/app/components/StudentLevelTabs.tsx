"use client";

import { ChangeEvent } from "react";
import { useStudentLevel } from "../context/StudentLevelContext";

type StudentLevelTabsProps = {
  border?: boolean;
};

const StudentLevelTabs = ({ border = false }: StudentLevelTabsProps) => {
  const { studentLevel, setStudentLevel } = useStudentLevel();

  const tabToggled = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setStudentLevel(event.target.ariaLabel === "University" ? "uni" : "hs");
    }
  };

  return (
    <div
      className={`${
        border ? "border-solid" : ""
      } card-translucent h-25 flex flex-col justify-evenly`}
    >
      <p className="text-center">I am in...</p>
      <div
        role="tablist"
        className="tabs tabs-border flex justify-center text-primary"
      >
        <input
          type="radio"
          name="student-type"
          className="tab"
          aria-label="University"
          checked={studentLevel === "uni"}
          onChange={tabToggled}
        />
        <input
          type="radio"
          name="student-type"
          className="tab"
          aria-label="High School"
          checked={studentLevel === "hs"}
          onChange={tabToggled}
        />
      </div>
    </div>
  );
};

export default StudentLevelTabs;
