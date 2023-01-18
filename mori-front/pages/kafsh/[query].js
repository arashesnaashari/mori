import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import Pagination from "../../components/pagi/Pagi";

export default function Home({ data }) {
  const [posts, setPosts] = useState(data[1]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Nav />
      <div className="w-full p-10">
        <main className="grid grid-cols-5 w-3/4 mx-auto gap-4">
          <div className="col-span-4 ">
            <div className="flex flex-row">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data[0]}
                paginate={paginate}
              />
            </div>
            <div className="grid grid-cols-3 gap-10">
              {data &&
                data[1].map((e) => {
                  return (
                    <>
                      <Card data={e} />
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-span-1 border-2"> {/* <Sidebar /> */}</div>
        </main>
      </div>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:5000/kafsh/${params.query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}
