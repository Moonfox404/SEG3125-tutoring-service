import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PaginationProps = {
  numPages: number
};

const Pagination = () => {
  return <div role="navigation" className="w-100 flex justify-around items-center">
    <FontAwesomeIcon icon={faChevronLeft} />
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
};

export default Pagination;
