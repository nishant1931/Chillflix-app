import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Recommendations = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <Carousel
      data={data?.results}
      loading={loading}
      endPoint={mediaType}
      title="Recommendations"
    />
  );
};

export default Recommendations;
