import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
function Pagination({ pages, setCurrentPage }) {
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  useEffect(() => {
    setCurrentPage(currentButton);
  }, [setCurrentPage, currentButton]);
  return (
    <div className="pagination">
      <div className="pagination__page">
        <ul className="page">
          <li
            className={`${
              currentButton === 1 ? "page-item disabled" : "page-item"
            } `}
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            <a href="#!">
              <GrFormPrevious />
            </a>
          </li>
          {numOfPages.map((page, index) => {
            return (
              <li
                key={index}
                className={`${
                  currentButton === page ? "page-item active" : "page-item"
                }`}
                onClick={() => setCurrentButton(page)}
              >
                <a href="/#" className="page-link">
                  {page}
                </a>
              </li>
            );
          })}
          {/* <li className="page-item active">
            <a href="/#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="/#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="/#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="/#" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="/#" className="page-link">
              5
            </a>
          </li> */}
          <li
            className={`${
              currentButton === numOfPages.length
                ? "page-item disabled"
                : "page-item"
            } `}
            onClick={() =>
              setCurrentButton((next) =>
                next === numOfPages.length ? next : next + 1
              )
            }
          >
            <a href="#!">
              <MdOutlineNavigateNext />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
