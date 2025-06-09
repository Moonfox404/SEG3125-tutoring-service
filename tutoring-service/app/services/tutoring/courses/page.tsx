"use client";

import Pagination from "@/app/components/Pagination";
import SearchBar from "@/app/components/SearchBar";
import { useStudentLevel } from "@/app/context/StudentLevelContext";
import {
  Course,
  mockHSCourses,
  mockUniCourses,
} from "@/app/mock-data/MockCourses";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Suspense, useState } from "react";

const filterCourses = (courses: Course[], searchKey: string) => {
  const filterCode = (value: number) => {
    const regex = /[0-9]+/;
    const slice = searchKey.match(regex)?.[0];
    return slice
      ? Number(slice) === value || Number(slice) === 400 + value
      : false;
  };

  const filterSpecific = (subject: string, code: number) => {
    const regex = /[a-zA-Z]{3}[0-9]{4}/;
    const slice = searchKey.match(regex)?.[0];
    return slice
      ? slice.slice(0, 3).toUpperCase() === subject &&
          (Number(slice.slice(3, 7)) === code ||
            Number(slice.slice(3, 7)) === 400 + code)
      : true;
  };

  return courses.filter((course) => {
    searchKey = searchKey.toLowerCase();
    return (
      !searchKey ||
      (filterSpecific(course.subject, course.code) &&
        (searchKey.includes(course.name.toLowerCase()) ||
          course.name.toLowerCase().includes(searchKey) ||
          searchKey.slice(0, 3).toUpperCase() === course.subject ||
          filterCode(course.code)))
    );
  });
};

const CourseList = ({ searchKey }: { searchKey: string }) => {
  const { studentLevel } = useStudentLevel();
  const courses = studentLevel === "hs" ? mockHSCourses : mockUniCourses;

  const [currentPage, setCurrentPage] = useState(1);
  const filteredCourses = filterCourses(courses, searchKey);

  return (
    <>
      <div className="row row-span-6 md:row-span-4 md:row-start-5 grid grid-rows-6 md:grid-rows-2 md:grid-cols-3">
        {filteredCourses
          .slice((currentPage - 1) * 6, currentPage * 6)
          .map((course, index) => {
            return (
              <div
                key={index}
                className="row my-2 mx-10 flex items-center justify-center"
              >
                <Link
                  className="btn btn-primary size-full text-center rounded-lg"
                  href={`courses/${course.subject}${course.code}${
                    studentLevel === "hs" ? "U" : ""
                  }`}
                >
                  {course.name}
                </Link>
              </div>
            );
          })}
      </div>
      <div className="row row-span-1 row-end-11 flex justify-center">
        <Pagination
          numPages={Math.ceil(filteredCourses.length / 6)}
          onToggle={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </>
  );
};

export default function CoursesPage() {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="min-h-[80vh] grid grid-rows-10">
      <div className="row row-span-1"></div>
      <div className="row flex justify-center items-center">
        <div className="text-primary">
          <FontAwesomeIcon icon={faBookBookmark} size="xl" />
        </div>
        <h1 className="text-4xl ml-2">Courses</h1>
      </div>
      <div className="row row-span-1 flex justify-center my-3">
        <SearchBar
          onSearch={(searchKey) => {
            setSearchKey(searchKey);
          }}
        />
      </div>
      <Suspense>
        <CourseList searchKey={searchKey} />
      </Suspense>
    </div>
  );
}
