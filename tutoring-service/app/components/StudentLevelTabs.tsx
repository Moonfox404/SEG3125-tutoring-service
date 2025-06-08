"use client";

import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

type StudentLevelTabProps = {
  onToggle: (level: "uni" | "hs") => void,
  border?: boolean,
};

const StudentLevelTabs = ({ onToggle, border = false }: StudentLevelTabProps) => {
  const tabToggled = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onToggle((event.target.ariaLabel === "University") ? "uni" : "hs");
    }
  };

  const params = useSearchParams();
  const defaultLevel = params.get('level') ?? 'uni';
  onToggle(defaultLevel as 'uni' | 'hs');

  return <div className={`${border ? "border-solid" : ""} card-translucent h-25 flex flex-col justify-evenly`}>
    <p className="text-center">I am in...</p>
    <div role="tablist" className="tabs tabs-border flex justify-center text-primary">
      <input type="radio" name="student-type" className="tab" aria-label="University" defaultChecked={defaultLevel === 'uni'} onChange={tabToggled}/>
      <input type="radio" name="student-type" className="tab" aria-label="High School" defaultChecked={defaultLevel === 'hs'} onChange={tabToggled}/>
    </div>
  </div>
};

export default StudentLevelTabs;
