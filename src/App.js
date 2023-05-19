import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api.js";
import { useDispatch, useSelector } from "react-redux";
import { getUrlConfiguration } from "./store/homeSlice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import Searchresult from "./pages/search-result/Searchresult.jsx";
import Explore from "./pages/explore/Explore.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  const dispatch = useDispatch();
  // const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        background: res.images.secure_base_url + "original",
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getUrlConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Searchresult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />s
    </BrowserRouter>
  );
};

export default App;
