let initialState = {
  animal: {},
  animals: []
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ANIMAL':
      return {
        ...state,
        animal: action.payload.animal
      };

    case 'SET_ANIMALS':
      return {
        ...state,
        animals: action.payload.animals
      };
    
    default:
      return state;
  }
}

export default animalReducer;