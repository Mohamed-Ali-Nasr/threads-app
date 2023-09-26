"use client";

import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Triangle
        height="100"
        width="100"
        color="#5bf7db"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;
