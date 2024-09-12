import React from "react";

function Loading() {
  return (
    <div className={"flex flex-col w-full"}>
      <div className={"flex flex-nowrap gap-x-3 h-1/3 pt-3"}>
        <div role="status" className="w-1/3 animate-pulse">
          <div className="h-2.5  bg-gray-400 rounded-full w-48 mb-4" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full" />
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-1/3 animate-pulse">
          <div className="h-2.5  bg-gray-400 rounded-full w-48 mb-4" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full" />
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-1/3 animate-pulse">
          <div className="h-2.5  bg-gray-400 rounded-full w-48 mb-4" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full mb-2.5" />
          <div className="h-2  bg-gray-400 rounded-full" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className={"flex flex-nowrap gap-x-5 h-2/3"}>
        <div role="status" className="w-1/2 animate-pulse">
          <div className="flex items-baseline mt-4">
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 "></div>
            <div className="w-full h-56 ms-6  bg-gray-400 rounded-t-lg "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 ms-6 "></div>
            <div className="w-full h-64 ms-6  bg-gray-400 rounded-t-lg "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-80 ms-6 "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 ms-6 "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-80 ms-6 "></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-1/2 animate-pulse">
          <div className="flex items-baseline mt-4">
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 "></div>
            <div className="w-full h-56 ms-6  bg-gray-400 rounded-t-lg "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 ms-6 "></div>
            <div className="w-full h-64 ms-6  bg-gray-400 rounded-t-lg "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-80 ms-6 "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-72 ms-6 "></div>
            <div className="w-full  bg-gray-400 rounded-t-lg h-80 ms-6 "></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
