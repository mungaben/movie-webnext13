import Link from "next/link"
import Image from "next/image"

const Movies = ({title,id,adult,backdrop,overview,release,popularity,poster_path}) => {
    const imagepath="https://image.tmdb.org/t/p/w500/"
  return (
    <div>
        <h1>
           {title}
        </h1>
        <h2> </h2>
        <Link href={`/${id}`}>
            <Image className=" object-center object-cover" src={imagepath+poster_path} alt="" width={300} height={300}/>
            

        </Link>
    </div>
  )
}

export default Movies