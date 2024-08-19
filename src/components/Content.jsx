import React from "react";
import { getAllMovies } from "../data/movies";
import Movie from "./Movie";

const Content = () => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {getAllMovies().map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Content;
