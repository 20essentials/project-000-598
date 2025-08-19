import React from "react";
import ReactDOM from "react-dom/client";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  body: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url('assets/bg.svg')",
    backgroundSize: "300px",
    backgroundPosition: "top",
    overflow: "hidden",
  },
});

function App() {
  return <div {...stylex.props(styles.body)} />;
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
