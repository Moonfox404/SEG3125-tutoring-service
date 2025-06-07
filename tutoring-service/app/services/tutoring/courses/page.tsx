import Pagination from "@/app/components/Pagination";
import PersonCard from "@/app/components/PersonCard";
import ReviewCard from "@/app/components/ReviewCard";
import SearchBar from "@/app/components/SearchBar";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CoursesPage() {
  return <div className="grid grid-rows-10">
    <div className="row row-span-1"></div>
    <div className="row flex justify-center items-center">
      <div className="text-primary">
        <FontAwesomeIcon icon={faBookBookmark} size="xl"/>
      </div>
      <h1 className="text-4xl ml-2">Courses</h1>
    </div>
    <div className="row row-span-1 flex justify-center my-3">
      <SearchBar />
    </div>
    <div className="row row-span-6">
    </div>
    <div className="row row-span-1 flex justify-center"><Pagination /></div>
  </div>
}