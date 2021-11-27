import React from "react";
import { Weather1 } from "./WeatherForecast/Weather1";
import { Api } from "./ApiData/Api";
import NewApi from "./ApiData/NewApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./ApiData/MovieDetails";
import Header from "./Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/api" element={<NewApi />} />
        <Route path="/movieDetails/:id" element={<movieDetails />} />
        <Route path="/weather" element={<Weather1 />} />
        <Route path="/firstapi" element={<Api />} />
      </Routes>
    </Router>
  );
};

export default App;
