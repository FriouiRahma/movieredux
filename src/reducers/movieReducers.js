import { SEARCH_MOVIE, DELETE_MOVIE, SEARCH_STAR, ADD_MOVIE, EDIT_MOVIE } from '../actions/type';
const initialState1 = {
  movies: [
    {
      id: 1,
      class: false,
      rate: 2,
      src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
      title: "Les quatre cents coups",
      year: "1959",
      image: "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,753,1000_AL_.jpg"
    },
    {
      id: 2,
      class: false,
      rate: 5,
      src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
      title: "La haine",
      year: "1995",
      image: "https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX700_CR0,0,700,999_AL_.jpg"
    },
    {
      id: 3,
      class: false,
      rate: 4,
      src: "https://www.youtube.com/embed/watch?v=sZeWPWN644Q",
      title: "Un prince à New York",
      year: "1988",
      image: "https://m.media-amazon.com/images/M/MV5BYzMzMDZkYWEtODIzNS00YjI3LTkxNTktOWEyZGM3ZWI2MWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }

  ],
  Rate: 1,
  searchTerm : ""
}

const MovieReducres = (state = initialState1, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, searchTerm : action.payload}
    case DELETE_MOVIE:
      return { ...state, movies: state.movies.filter(el => el.id !== action.payload) }
    case SEARCH_STAR:
      return { ...state, Rate: action.payload }
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) }
    case EDIT_MOVIE:
      return { ...state, movies: state.movies.map(  el => el.title === action.payload.name ? action.payload.obj :el)}



    default: return state;

  }



}
export default MovieReducres;