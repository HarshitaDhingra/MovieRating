import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import ReactTrainingHomeReducer from './reactTrainingReducer';
import { routerReducer } from 'react-router-redux';
import MovieRatingReducer from './MovieRatingReducer';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  reactTrainingStore: ReactTrainingHomeReducer,
  movieStore:MovieRatingReducer,
});

export default rootReducer;
