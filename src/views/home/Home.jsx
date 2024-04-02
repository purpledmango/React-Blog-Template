import SideBar from "./SideBar";
import Footer from "../../common/Footer";
import LargeTiledPost from "../../common/LargeTile";
import Nav from "../../common/Nav";
import articles from "../../posts.json";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="lg:grid lg:grid-cols-10">
        {/* main area */}
        <div className="w-[90%] h-full flex flex-col justify-center items-center mx-auto lg:col-span-7 lg:w-full">
          {articles.length > 0 ? (
            <LargeTiledPost />
          ) : (
            <div className="w-[90%] h-full flex flex-col justify-center items-center mx-auto lg:col-span-7 lg:w-full">
              <h2 className="text-center text-3xl">Found Nothing here!</h2>
            </div>
          )}
        </div>

        {/* side Area */}
        <SideBar />

        <div className="col-span-6 grid grid-col-1 lg:grid-cols-2 w-full gap-3 mx-auto h-full p-6 lg:p-0">
          {/* Render pagination controls */}
          <div className="pagination-controls"></div>
        </div>
      </div>
      {/* <MoreContent data={articles} /> */}
      <Footer />
    </>
  );
};

export default Home;
