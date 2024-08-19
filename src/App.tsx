import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/global.ts";

import Routes from "./routes";
import { ContextsProvider } from "./contexts/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App: React.FC = () => (
  <ContextsProvider>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      closeButton={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="colored"
    />
  </ContextsProvider>
);

export default App;
