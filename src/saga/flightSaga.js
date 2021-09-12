import { put, takeEvery, call } from "redux-saga/effects";
import { addAllFlights, FETCH_FLIGHTS } from "../store/flightReducer";

const url =
  "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/MOSC-sky/NYCA-sky/2021-09/";
const options = {
  headers: {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "31b64b0bf6mshb9c21d9f9f0b9b6p1a0815jsnd5726cca4915",
  },
};

const fixData = (data) => {
  return data.Quotes.filter((obj) => {
    let objDate = obj.OutboundLeg.DepartureDate;
    obj.fav = false;
    if (
      Date.parse(objDate) > Date.now() &&
      Date.parse(objDate) <
        new Date(new Date().setDate(new Date().getDate() + 10))
    ) {
      return obj;
    }
  }).sort((a, b) => {
    return (
      Date.parse(a.OutboundLeg.DepartureDate) -
      Date.parse(b.OutboundLeg.DepartureDate)
    );
  });
};

const fetchFlightsFromAPI = () => fetch(url, options);

function* fetchFlightsWorker() {
  const data = yield call(fetchFlightsFromAPI);
  const json = yield call(() => data.json());
  const fixedData = fixData(json);
  yield put(addAllFlights(fixedData));
}

export function* flightWatcher() {
  yield takeEvery(FETCH_FLIGHTS, fetchFlightsWorker);
}
