import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = "28001f7017664a88ca467e7c8e286f3f"; // Substitua pela sua API Key
const API_URL = `https://api.themoviedb.org/3/movie/`;

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}${id}?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        setError("Erro ao carregar detalhes do filme.");
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
      <p>Data de Lançamento: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetail;
