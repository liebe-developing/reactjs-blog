import React from "react";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
ReactDom.render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
