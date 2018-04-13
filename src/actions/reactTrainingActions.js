/**
 * @author evivehealth on 10/04/18.
 */

const ReactTrainingActionTypes = {
  ADD_NEW_TRAINING: 'ReactTrainingActions/ADD_NEW_TRAINING',
};

const ReactTrainingActions = {
  addNewTraining: payload => ({ type: ReactTrainingActionTypes.ADD_NEW_TRAINING, payload }),
};

export {
  ReactTrainingActionTypes,
  ReactTrainingActions,
};
