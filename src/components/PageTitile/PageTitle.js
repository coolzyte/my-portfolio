import React from "react";

const PageTitle = ({ heading, desc }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default PageTitle;
