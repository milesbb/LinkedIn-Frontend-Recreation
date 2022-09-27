import { GET_EXPERIENCES, GET_EXPERIENCES_ERROR, GET_EXPERIENCES_LOADING, GET_SPECIFIC_EXPERIENCE } from "../actions/getExperiences";

const initialState = {
  experiences: [],
  specificExperience: null,
  experiencesLoading: false,
  experiencesError: false,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };
    case GET_SPECIFIC_EXPERIENCE:
      return {
        ...state,
        specificExperience: action.payload,
      };
    case GET_EXPERIENCES_LOADING:
      return {
        ...state,
        experiencesLoading: action.payload,
      };
    case GET_EXPERIENCES_ERROR:
      return {
        ...state,
        experiencesError: action.payload,
      };
  }
};

export default experiencesReducer
