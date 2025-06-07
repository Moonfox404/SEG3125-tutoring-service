"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type PaginationProps = {
  numPages: number
};

const Pagination = ({ numPages }: PaginationProps) => {

  const pages: number[] = Array.from({ length: Math.floor(numPages) }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);

  const PageTab = ({ label, checked = false }: { label: number, checked?: boolean }) => {
    return <input
      type="radio"
      name="page_select"
      className="tab"
      aria-label={String(label)}
      defaultChecked={checked}
      onChange={(event) => {
        if (event.target.checked) {
          setCurrentPage(Number(event.target.ariaLabel));
        }
      }} />
  };

  return <div role="navigation" className="w-100 flex justify-around items-center">
    <button
      onClick={() => { setCurrentPage(currentPage - 1) }}
      disabled={currentPage === 1}
      className="btn btn-ghost"
      >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <div className="tabs tabs-border text-accent flex items-center">
      {pages.length <= 5 ? pages.map(
        // display all page numbers if less than or equal to 5
        (pageNum) => {
          return <PageTab label={pageNum} checked={currentPage === pageNum} />;
        }) :
        // display first and last 2
        <>
          {currentPage > 1 ? <span className="text-base-content">...</span> : <></>}
          {currentPage === pages.length ? <PageTab label={pages[currentPage - 3]} /> : <></>}
          {currentPage > 1 ? <PageTab label={pages[currentPage - 2]} /> : <></>}
          <PageTab label={pages[currentPage - 1]} checked />
          {currentPage < pages.length ? <PageTab label={pages[currentPage]} /> : <></>}
          {currentPage === 1 ? <PageTab label={pages[currentPage + 1]} /> : <></>}
          {currentPage < pages.length ? <span className="text-base-content">...</span> : <></>}
        </>
      }
    </div>
    <button
      onClick={() => { setCurrentPage(currentPage + 1) }}
      disabled={currentPage === pages.length}
      className="btn btn-ghost"
      >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
};

export default Pagination;
