import React from "react";
import DetailsBanner from "./details-banner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import Cast from "./cast/Cast";
import VideosSection from "./videos-section/VideosSection";
import Similar from "./details-carousels/Similar";
import Recommendations from "./details-carousels/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const officialTrailerVideo = data?.results?.filter(
    (d) => d.name === "Official Trailer"
  );

  const trailerVideo = data?.results?.filter((d) => d.name === "Trailer");

  return (
    <div>
      <DetailsBanner
        video={
          officialTrailerVideo?.length > 0
            ? officialTrailerVideo?.[0]
            : trailerVideo?.[0]
        }
        crew={creditsData?.crew}
      />
      <Cast data={creditsData?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
