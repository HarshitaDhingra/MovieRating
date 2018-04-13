/**
 * @author evivehealth on 10/04/18.
 */

import { ReactTrainingActionTypes } from './../actions/reactTrainingActions';

const initialState = {
  trainingList:  [],
};

const ReactTrainingHomeReducer = (state = initialState, action) => {
  switch(action.type) {

    case ReactTrainingActionTypes.ADD_NEW_TRAINING:
      return {
        ...state,
        trainingList: action.payload,
      };

    default:
      return state;
  }
};

export default ReactTrainingHomeReducer;
