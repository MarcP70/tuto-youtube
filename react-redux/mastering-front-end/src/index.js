import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer  from "./reducers";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPosts());
store.dispatch(getUser());

// Get the root element
const rootElement = document.getElementById("root");

// Create a root using createRoot
const root = createRoot(rootElement);

// Render the app using the new root API
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
