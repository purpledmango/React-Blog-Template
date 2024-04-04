import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Footer from "../../common/Footer";
import LargeTiledPost from "../../common/LargeTile";
import Nav from "../../common/Nav";
import Spinner from "../../common/Spinner";
import { getTop3 } from "../../services/homeApi";

const Home = () => {
  const [top3Articles, setTop3Articles] = useState(null);

  useEffect(() => {
    const fetchTop3Articles = async () => {
      try {
        const response = await getTop3();
        setTop3Articles(response.data);
      } catch (error) {
        console.error("Error fetching top 3 articles:", error);
      }
    };

    fetchTop3Articles();

    return () => {
      // Cleanup code here if needed
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="lg:grid lg:grid-cols-10">
        <div className="w-full lg:col-span-7">
          {top3Articles ? (
            top3Articles.map((article) => (
              <LargeTiledPost key={article.slug} title={article.title} content={article.content} createdAt={article.createdAt} author={article.author} slug={article.slug} tumbnail={article.thumbnail} />
            ))
          ) : (

            <div class="w-full h-full flex flex-col items-center justify-center">
              <Spinner />
              <h2 class="text-3xl capitalize mb-7">Fetching The Good Stuff</h2>
            </div>


          )}
        </div>
        <SideBar />
        <div className="lg:col-span-2">
          <div className="pagination-controls"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
