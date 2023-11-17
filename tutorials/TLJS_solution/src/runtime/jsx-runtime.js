import tljs from "./tljs";

export function jsx(tag, props) {
  return tljs.createElement(tag, props);
}

export function jsxs(tag, props) {
  return jsx(tag, props);
}
