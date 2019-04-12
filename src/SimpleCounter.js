import { html, define } from "hybrids";

export function increaseCount(host) {
  const e = new Event("foo");
  host.dispatchEvent(e);
  host.count += 1;
}

export const SimpleCounter = {
  count: 100,
  name: "",
  /* object getter for name >*/
  _name: {
    get: ({ name }) => JSON.parse(name)
  },
  init: {
    connect: (host, key) => {
      console.log("hoh");
      host.addEventListener("init", e => {
        host["count"] = e.detail.count;
        host["data"] = e.detil;
      });
    }
  },
  render: ({ count, _name }) =>
    html`
      <h1>hehe</h1>
      <button onclick=${increaseCount}>${count}</button>
    `
};

define("simple-counter", SimpleCounter);
