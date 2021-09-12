const defaultState = { flights: [] };

const ADD_FAV = "addFav";
const REM_FAV = "remFav";
const FILL_FLIGHTS = "fillFlights";
export const FETCH_FLIGHTS = "fetchFlights";

export const flightReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILL_FLIGHTS:
      return { ...state, flights: action.payload.slice() };
    case ADD_FAV:
      return {
        ...state,
        flights: state.flights.map((obj) =>
          obj.QuoteId === action.payload ? { ...obj, fav: true } : obj
        ),
      };

    case REM_FAV:
      return {
        ...state,
        flights: state.flights.map((obj) =>
          obj.QuoteId === action.payload ? { ...obj, fav: false } : obj
        ),
      };
    default:
      return state;
  }
};

export const addAllFlights = (payload) => ({
  type: FILL_FLIGHTS,
  payload,
});
export const addFavFlight = (payload) => ({
  type: ADD_FAV,
  payload,
});
export const remFavFlight = (payload) => ({
  type: REM_FAV,
  payload,
});
export const fetchFlights = () => ({ type: FETCH_FLIGHTS });
