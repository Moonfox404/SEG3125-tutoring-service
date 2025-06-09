"use client";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type PaginationProps = {
  numPages: number;
  onToggle: (page: number) => void;
};

const Pagination = ({ numPages, onToggle }: PaginationProps) => {
  const [maxPageDisplay, setMaxPageDisplay] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 350px)");

    setMaxPageDisplay(mediaQuery.matches ? 1 : 3);

    // add event listener for if preference changes
    mediaQuery.addEventListener("change", (event) => setMaxPageDisplay(event.matches ? 1 : 3));
  }, []);

  const pages: number[] = Array.from(
    { length: Math.floor(numPages) },
    (_, i) => i + 1
  );
  const [currentPage, setCurrentPage] = useState(1);

  const PageTab = ({
    label,
    checked = false,
  }: {
    label: number;
    checked?: boolean;
  }) => {
    return (
      <input
        type="radio"
        name="page_select"
        className="tab"
        aria-label={String(label)}
        defaultChecked={checked}
        onChange={(event) => {
          if (event.target.checked) {
            const page = Number(event.target.ariaLabel);
            setCurrentPage(page);
            onToggle(page);
          }
        }}
      />
    );
  };

  return (
    <div role="navigation" className="flex justify-around items-center">
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          onToggle(currentPage - 1);
        }}
        disabled={currentPage === 1}
        className="btn btn-ghost"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="tabs tabs-border text-accent flex items-center">
        {pages.length <= (maxPageDisplay + 2) ? (
          pages.map(
            // display all page numbers if less than or equal to 5
            (pageNum) => {
              return (
                <PageTab label={pageNum} checked={currentPage === pageNum} />
              );
            }
          )
        ) : (
          // display first and last 2
          <>
            {currentPage > 1 ? (
              <span className="text-base-content">...</span>
            ) : null}
            {currentPage === pages.length && maxPageDisplay > 1 ? (
              <PageTab label={pages[currentPage - 3]} />
            ) : null}
            {currentPage > 1 && maxPageDisplay > 1 ? (
              <PageTab label={pages[currentPage - 2]} />
            ) : null}
            <PageTab label={pages[currentPage - 1]} checked />
            {currentPage < pages.length && maxPageDisplay > 1 ? (
              <PageTab label={pages[currentPage]} />
            ) : null}
            {currentPage === 1 && maxPageDisplay > 1 ? (
              <PageTab label={pages[currentPage + 1]} />
            ) : null}
            {currentPage < pages.length ? (
              <span className="text-base-content">...</span>
            ) : null}
          </>
        )}
      </div>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          onToggle(currentPage + 1);
        }}
        disabled={currentPage === pages.length}
        className="btn btn-ghost"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
