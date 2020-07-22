$('.search-button').on('click', function () {
  $.ajax({
    url:
      'http://www.omdbapi.com/?apikey=135f5aaa&s=' + $('.input-keyword').val(),
    success: (results) => {
      const movies = results.Search;
      let cards = '';
      movies.forEach((movie) => {
        cards += showCards(movie);
      });
      $('.movie-container').html(cards);
      // Ketika tombol di klik
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url:
            'http://www.omdbapi.com/?apikey=135f5aaa&i=' +
            $(this).data('imdbid'),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $('.modal-body').html(movieDetail);
          },
          error: (error) => {
            console.log(error.responseText);
          },
        });
      });
    },
    error: (error) => {
      console.log(error.responseText);
    },
  });
});

function showCards(movie) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${movie.Poster}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${movie.Year} </h6>
        <a href="#" class="btn btn-primary modal-detail-button " data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}"> Show Details</a>
      </div>
    </div>
  </div>
</div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" alt="" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"> ${m.Title} (${m.Year}) </li>
          <li class="list-group-item"><strong>Director</strong> ${m.Director} </li>
          <li class="list-group-item"> <strong>Actors</strong> ${m.Actors} </li>
          <li class="list-group-item"> <strong>Language : </strong> ${m.Language} </li>
          <li class="list-group-item"> <strong> Plot: </strong> <br> ${m.Plot} </li>
        </ul>
      </div>
    </div>
  </div>`;
}
