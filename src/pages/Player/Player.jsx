import React, { useEffect, useState } from "react";
import "./Player.css";
import leftArrow from "../../assets/back_arrow_icon.png";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import Notfound from "../../components/Notfound/Notfound";
import Similar from "../../components/Similar/Similar";

const Player = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDlhZGEzMWNiZjNhMGYxYWQ0MDlmNzliMDliZjdmZiIsInN1YiI6IjY2NDU0NmRkYTEwZWQ2OGUxYjI0MmZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HGm_3ki_mTgNFuKy_2eyHc0vPWxQhiW0W1EkPYG-1E",
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results[0]);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const truncate = (str, n) => {
    return str?.length > n && str.slice(str, n);
  };

  const truncate2 = (str, n) => {
    return str?.length > n && str.slice(str, n);
  };
  return data ? (
    <div className="player">
      <Link to="/home">
        <img src={leftArrow} alt="left" />
      </Link>
      <div className="h-[900px] max-h-[450px] md:max-h-[900px]">
        <ReactPlayer
          className=""
          url={`https://www.youtube.com/embed/${data.key}`}
          controls
          height="90%"
          width="100%"
        />
      </div>
      <div className="video-details bg-[grey] p-5 flex justify-center gap-3 text-sm md:text-xl">
        <p>{truncate2(data?.name, 20)}</p>
        <p>|</p>
        <p>{truncate(data?.published_at, 10)}</p>
        <p>|</p>
        <p>{data.type}</p>
      </div>
      <Similar id={id} />
    </div>
  ) : (
    <Notfound />
  );
};

export default Player;
