import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourite(){
    const {favorites} = useMovieContext();

    if(favorites){
       
        return (
              <div className="favorites"> 
                <h2>Your Favourites</h2>
             <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
        );
    }

    return <div className="favorites-empty">
        <h2>No Favourite Movie yet</h2>
         <p>start adding movies to your favourites and they will appear</p>
    </div>
}

export default Favourite