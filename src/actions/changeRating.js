
import {fetchMovies} from '../moviesAPI'
const CONSTANTS={
  CHANGE_RATING : 'CHANGE_RATING',
  SAVE_MOVIES : 'SAVE_MOVIES',
}
/*const rating_function = {
  function changeRating ({ name,id,image,rating }) {
 return {
   type: CHANGE_RATING,
   payload: {name,
   id,
   image,
   rating,
   }
}
}
}*/

const rating_function = {
  loadInitialData: () => (dispatch) => {
      fetchMovies().
      then(response => {
        response.json().
        then((data) => {
        dispatch(rating_function.saveMovieStore(data));
      })
    })
  },

  saveMovieStore: payload => ({type: CONSTANTS.SAVE_MOVIES , payload}),
  changeRating: payload => ({type: CONSTANTS.CHANGE_RATING , payload}),
};
export{
  CONSTANTS,
rating_function,
}
