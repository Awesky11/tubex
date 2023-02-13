import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/RootStore";
import { AuthContextProvider } from "./redux/context/AuthContext";
import { UploadContextProvider } from "./redux/context/UploadContext";

import ThemeProvider from "react-bootstrap/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <UploadContextProvider>
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            <App />
          </ThemeProvider>
          ;
        </UploadContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
