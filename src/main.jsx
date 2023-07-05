import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { persistor, store } from "./redux/usersStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);
