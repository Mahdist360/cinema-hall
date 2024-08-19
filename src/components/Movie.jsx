/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import checkout from "../assets/icons/checkout.svg";
import { CartContext } from "../context";
import { getMovieUrl } from "../utils/getMovieUrl";
import Rating from "./Rating";
import MovieDetails from "./modals/MovieDetails";

const Movie = ({ movie }) => {
  const [isDhowDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartState, dispatch } = useContext(CartContext);

  const handleDetails = (e) => {
    e.preventDefault();
    setShowDetails(true);
    setSelectedMovie(movie);
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    for (const item of cartState.cart) {
      if (item.id === movie.id) {
        return;
      }
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: movie,
    });

    setShowDetails(false);
    setSelectedMovie(null);
    toast.success("Movie Added To Cart ", {
      position: "bottom-right",
      theme: "dark",
    });
  };
  return (
    <>
      {isDhowDetails && (
        <MovieDetails
          selectedMovie={selectedMovie}
          setShowDetails={setShowDetails}
          handleAddToCart={handleAddToCart}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      <a href="3" onClick={handleDetails}>
        <figure
          key={movie.id}
          className="p-2 border border-black/10 shadow-sm dark:border-white/10 rounded-xl "
        >
          <img
            className="w-full object-cover "
            src={getMovieUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1 capitalize">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Rating rating={movie.rating} />
            <button
              className="bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={handleAddToCart}
            >
              <img src={checkout} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
};

export default Movie;
