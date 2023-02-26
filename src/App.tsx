import React from "react";
import "./styles/App.scss";

function App() {
  const [show, setShow] = React.useState(false);
  const content = "something was done";
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Github Actions</h1>
      <button
        type="button"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Do something. Ok?
      </button>
      <p style={{ display: show ? "block" : "none" }}>{content}</p>
    </div>
  );
}

export default App;
