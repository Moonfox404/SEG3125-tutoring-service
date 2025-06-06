enum StudentLevel {
  UNIVERSITY = 0,
  HIGHSCHOOL,
}

type StudentLevelTabProps = {
  onToggle: (level: StudentLevel) => void,
  border?: boolean,
};

const StudentLevelTabs = ({ onToggle, border = false }: StudentLevelTabProps) => {
  return <div className={`${border ? "border-solid" : ""} card-translucent h-25 flex flex-col justify-evenly`}>
    <p className="text-center">I am in...</p>
    <div role="tablist" className="tabs tabs-border flex justify-center text-primary">
      <input type="radio" name="student-type" className="tab" aria-label="University" defaultChecked/>
      <input type="radio" name="student-type" className="tab" aria-label="High School" />
    </div>
  </div>
};

export default StudentLevelTabs;
export { StudentLevel };
