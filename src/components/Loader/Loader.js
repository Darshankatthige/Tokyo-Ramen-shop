import React from "react";

export const Loader = () => {
  // Loader component [When api beeing called Loader will display.]
  return (
   <center> <div className="justify-content-center spinner-border text-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div></center>
  );
};
