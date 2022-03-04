import React from "react";

export const ListFooter = () => {
  // Footer component [Displays the Footer at the end]
  return (
    <div className="text-center list-footer mt-2 mb-2 ">
      <div className="bold">Want to visit these great places?</div>
      <div>
        Find cheap and affordable accomodation in Tokyo with{" "}
        <a href="https://oyojapan.jp/en" target="_blank" className="text-white">
          OYO Hotels
        </a>{" "}
        .
      </div>
    </div>
  );
};
