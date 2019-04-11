import { html, define } from "hybrids";

export function increaseCount(host) {
  host.count += 1;
}

export const SimpleCounter = {
  count: 100,
  name: "",
  /* object getter for name >*/
  _name: {
    get: ({ name }) => JSON.parse(name)
  },
  render: ({ count, _name }) => {
    return html`
      <button onclick="${increaseCount}">
        Count: ${count} Name: ${_name.name}
      </button>
    `;
  }
};

define("simple-counter", SimpleCounter);
