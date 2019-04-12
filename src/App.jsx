import React, { useEffect } from "react";
const kristoffer = {
  name: "kristoffer"
};
const hehe = () => console.log("from the outside");
const App = () => {
  const ref = React.createRef();
  useEffect(() => {
    ref.current.addEventListener("foo", data => {
      console.log(data);
    });
    ref.current.dispatchEvent(new CustomEvent("init", { detail: { count: 13 } }));
    console.log(ref);
  });
  return (
    <>
      <h1>Hello world</h1>
      <simple-counter ref={ref} name={JSON.stringify(kristoffer)} />
    </>
  );
};

export default App;
