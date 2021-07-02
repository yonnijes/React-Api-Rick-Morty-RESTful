import axios from "axios";

// constantes
const dataInicial = {
  fetching: false,
  array: [],
  page: 1,
};

// types
let URL = "https://rickandmortyapi.com/api/character/";

let GET_CHARACTERS = "GET_CHARACTERS";
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

// reducer
export default function reducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payload, page: action.page };
    default:
      return state;
  }
}

// actions
export const obtenerCharacterAction = (page = 1) => async (dispatch, getState) => {
  //const { page } = getState().character;
  dispatch({
    type: GET_CHARACTERS,
  });
  try {
    const res = await axios.get(`${URL}?page=${page}`);
    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payload: res.data.results,
      page: page,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: error.response.message,
    });
  }
};
