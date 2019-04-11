import React from "react";
const kristoffer = {
  name: "kristoffer"
};
const hehe = () => console.log("from the outside");
const App = () => (
  <>
    <h1>Hans-wilhelm</h1>
    <simple-counter name={JSON.stringify(kristoffer)} count={13} />
  </>
);
export default App;
