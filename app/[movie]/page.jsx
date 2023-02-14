import React from "react";
import Image from "next/image";

export default async function MovieDetail({ params }) {
  console.log(params);
  const { movie } = params;
  const imagepath = "https://image.tmdb.org/t/p/w500/";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=1cc1032d49dd07a25268765d71494737`,{
      next:{
        revalidate:60
      }
    }
  );

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <div>
        <h2 className=" text-2xl"> {data.title} </h2>
        <Image
          className=" my-12 w-full"
          src={imagepath + data.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p> {data.overview}</p>
        <h2> {data.release_date}</h2>
        <h2> {data.runtime}</h2>
        <h5>{data.tagline} </h5>
      </div>
      <h1>details</h1>
    </div>
  );
}
