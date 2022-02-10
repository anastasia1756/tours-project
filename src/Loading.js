import React from "react";
import "../node_modules/react-loader-spinner/dist/loader/css/Plane.css";
import { Plane } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <h1>
        loading...
        <Plane
          ariaLabel="loading-indicator"
          wrapperStyle={{ justifyContent: "center" }}
        />
      </h1>
    </div>
  );
};

export default Loading;
