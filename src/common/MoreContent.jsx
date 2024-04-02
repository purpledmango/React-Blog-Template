const MoreContent = (props) => {
  return (
    <>
      <div className="w-full h-[560px] bg-orange-500 flex flex-col justify-evenly items-center my-6">
        <div className="w-[80%] p-6 border-black border-b-[1px]">
          <h2 className="text-center text-4xl">Most Commented</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 py-6 space-x-3">
          <div className=" lg:border-r-[1px] border-black  lg:col-span-1">
            <p className="text-lg font-light text-center px-5">
              The best toasts in the world
            </p>
          </div>
          <div className=" lg:border-r-[1px] border-black  lg:col-span-1">
            <p className="text-lg font-light text-center px-5">
              How to deal with annoying friends
            </p>
          </div>
          <div className=" lg:border-r-[1px] border-black  lg:col-span-1">
            <p className="text-lg font-light text-center px-5">
              Hats to rock this summer
            </p>
          </div>
          <div className=" lg:border-r-[1px] border-black  lg:col-span-1">
            <p className="text-lg font-light text-center px-5">
              5 alternatives to Meat
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="text-center text-4xl py-6 my-6">From the Archives</h3>
        <div className="w-full grid lg:grid-cols-6 gap-6 my-6 pt-6">
          {props.data.map((postItem) => {
            return (
              <div className="col-span-2 flex flex-col justify-center items-center">
                <img
                  src={postItem.thumbnail}
                  className="w-full object-center object-cover h-full rounded-xl"
                  alt="tcisotm"
                />
                <span className="p-6  text-md ">{postItem.tag}</span>
                <h3 className="p-6  text-5xl">{postItem.title}</h3>
                <p className="p-6  text-lg ">{postItem.content.slice(0, 12)}</p>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default MoreContent;
