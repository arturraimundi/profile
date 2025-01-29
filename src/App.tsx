import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const API_KEY = "28001f7017664a88ca467e7c8e286f3f"; // 🔥 Substitua pela sua API Key
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;


function App() { 
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleButtonClick(id) {
    history.push(`/movie/${id}`);
  }

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        setError("Erro ao carregar filmes.");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "20px" }}>
      <h1>🎬 Filmes Populares</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
            <p>{movie.release_date}</p>
            <button onClick={() => handleButtonClick(movie.id)}>
              Clique Aqui
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}