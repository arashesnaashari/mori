import React from "react";
import Link from "next/link";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row my-7 justify-around cursor-pointer ">
      {pageNumbers.map((number) => (
        <div key={number} className="">
          <Link
            href={`/kafsh/${number}`}
            className="mr-3 p-2 px-3 rounded-md border-2 hover:text-green-400"
          >
            {number}
          </Link>
          {/* <a
            href=""
            onClick={() => paginate(number)}
            className="p-2 px-3 rounded-md border-2 hover:text-green-400"
          >
            
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
