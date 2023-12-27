const heading1 = React.createElement(
  "h1",
  {
    id: "h-1",
  },
  "Heading 1"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "h-3",
  },
  "Heading 3"
);

const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading1, heading3]
);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
