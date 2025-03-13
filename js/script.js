const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2JjOGEzY2Q4NDA4YjczN2JkZDE0Yzk1ZTQ0M2I0ZSIsIm5iZiI6MTc0MTg3NTk5Ny40MzYsInN1YiI6IjY3ZDJlYjFkNzZhOWQ3MzQ2NzgxMzU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CXr5tjJjLSlLwEPT9Gsf12G10AgRaAYl8qSwpAkHySc",
  },
};

fetch(url, options)
  .then((res) => res.json()) // Ambil response JSON
  .then((data) => {
    console.log(data); // Cek apakah data diterima
    const movies = data.results; // Ambil daftar film dari response API
    const movieList = document.getElementById("movie-list"); // Ambil elemen movie-list
    movieList.innerHTML = ""; // Kosongkan elemen sebelum menambahkan

    movies.forEach((movie) => {
      const movieCard = `
        <div class="card" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text overflow-hidden">${movie.overview}</p>
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
    </div>
</div>
      `;
      movieList.innerHTML += movieCard; // Tambahkan setiap card ke dalam movie-list
    });
  })
  .catch((err) => console.error("Error fetching movies:", err));
