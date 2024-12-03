import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";

import { store } from "./store/store.js";
import { AppRoute } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </StrictMode>
);
