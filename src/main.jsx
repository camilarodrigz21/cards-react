import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import Grid from "./components/Grid";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Grid />
  </StrictMode>
);
