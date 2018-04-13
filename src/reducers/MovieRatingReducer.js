
import {CONSTANTS} from './../actions/changeRating'

const initialMovieState = {
movieList : [],
Loading:true,
};
/*const movieReducer = (state = initialMovieState,action)=>{
  const {name,id,image,rating} = action
  switch(action.type){
    case changeRating.CHANGE_RATING:
    return{
    state
    }
    default:
    return state;
  }
}
*/
const updateRating = (movieList,id,rating)=>{
  return movieList.map(movie =>{
    if(movie.id == id){
      return {
        ...movie,
        rating:rating,
      }
    }
    return movie;
  });
}
const movieReducer = (state = initialMovieState,action)=>{
  switch(action.type){
    case CONSTANTS.CHANGE_RATING:
    return{
    ...state,
    movies: updateRating(state.movies,action.payload.id,action.payload.rating),
    }
    case CONSTANTS.SAVE_MOVIES:
    return{
      Loading:false,
      movies: action.payload,
    }
    default:
    return state;
  }
}
export default movieReducer;
