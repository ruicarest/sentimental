import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Sentiment from "./Sentiment";
import SentimentReducer from "./SentimentStore";

// const store =
//   process.env.NODE_ENV === "production"
//     ? createStore(SentimentReducer)
//     : createStore(SentimentReducer, composeWithDevTools());

const store = createStore(SentimentReducer, composeWithDevTools());

const SentimentStContainer = () => {
  return [
    <Provider store={store}>
      <Sentiment />
    </Provider>
  ];
};

export default SentimentStContainer;