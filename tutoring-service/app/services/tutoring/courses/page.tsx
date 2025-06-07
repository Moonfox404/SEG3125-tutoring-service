"use client";

import Pagination from "@/app/components/Pagination";
import SearchBar from "@/app/components/SearchBar";
import { Course, mockHSCourses, mockUniCourses } from "@/app/mock-data/MockCourses";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const filterCourses = (courses: Course[], searchKey: string) => {
  const filterSpecific = (value: number) => {
    const regex = /[0-9]+/;
    const slice = searchKey.match(regex)?.[0];
    return (slice) ? Number(slice) === value || Number(slice) === 400 + value : false;
  };

  return courses.filter((course) => {
    searchKey = searchKey.toLowerCase();
    return (
      !searchKey
      || (
        searchKey.includes(course.name.toLowerCase())
        || course.name.toLowerCase().includes(searchKey)
        || searchKey.slice(0, 3).toUpperCase() === course.subject
        || filterSpecific(course.code)
      )
    );
  });
};

export default function CoursesPage() {
  const params = useSearchParams();
  const level = params.get("level");
  const courses = (level === "hs") ? mockHSCourses : mockUniCourses;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");

  const filteredCourses = filterCourses(courses, searchKey);

  return (
    <div className="grid grid-rows-10">
      <div className="row row-span-1"></div>
      <div className="row flex justify-center items-center">
        <div className="text-primary">
          <FontAwesomeIcon icon={faBookBookmark} size="xl" />
        </div>
        <h1 className="text-4xl ml-2">Courses</h1>
      </div>
      <div className="row row-span-1 flex justify-center my-3">
        <SearchBar onSearch={(searchKey) => { setSearchKey(searchKey); }} />
      </div>
      <div className="row row-span-6 grid grid-rows-6 md:grid-rows-2 md:grid-cols-3">
        {filteredCourses.slice((currentPage - 1) * 6, currentPage * 6).map(
          (course, index) => {
            return <div key={index} className="row bg-primary text-primary-content rounded-lg my-2 mx-10 flex items-center justify-center">
              <span className="text-center">{course.name}</span>
            </div>
          }
        )}
      </div>
      <div className="row row-span-1 flex justify-center">
        <Pagination numPages={Math.ceil(filteredCourses.length / 6)} onToggle={(page) => { setCurrentPage(page); }} />
      </div>
    </div>
  );
};
