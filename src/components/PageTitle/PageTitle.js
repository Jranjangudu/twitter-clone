import React from "react";
import Helmet from "react-helmet";

const PageTitle = ({ title }) => {
  let defaultTitle = "Twitter clone";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
