import Image from "next/image";
import { Inter } from "@next/font/google";

import { Montserrat } from "@next/font/google";
import Movies from "./Movies";

const inter = Inter({ subsets: ["latin"] });
const monsarrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=1cc1032d49dd07a25268765d71494737`
  );
  const data = await res.json();
  // console.log(data);

  return (
    <main className="  justify-center">
      <div className={`${monsarrat.className} grid grid-cols-4 gap-16   `}>
        {data &&
          data.results.map((movie, idx) => (
            <Movies
              key={idx}
              id={movie.id}
              adult={movie.adult}
              backdrop={movie.backdrop_path}
              title={movie.original_title}
              overview={movie.overview}
              release={Movies.release}
              poster_path={movie.poster_path}
              popularity={movie.popularity}
            />
          ))}
        
      </div>
    </main>
  );
}
