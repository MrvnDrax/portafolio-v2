import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/carousel/styles.css";
// import "@mantine/core/styles.css";

const theme = createTheme({
  primaryColor: "cyan",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
