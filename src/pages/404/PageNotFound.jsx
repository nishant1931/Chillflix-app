import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="page_not_found">
      <ContentWrapper>
        <span className="big_text">404</span>
        <span className="small_text">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
