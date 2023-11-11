const tljs = {
  appendChild: (parent, child) => {
    console.log("tljs.appendChild", parent, child);
    if (Array.isArray(child)) {
      child.forEach((c) => {
        appendChild(parent, c)
      });
    }
    else {
      if (child.nodeType) {
        parent.appendChild(child);
      } else {
        parent.appendChild(document.createTextNode(child));
      }
    }
  },

  createElement: (tag, props) => {
    console.log("tljs.createElement", tag.name, props);
    if (typeof tag === "function") {
      return tag(props);
    }

    const element = document.createElement(tag);
    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === "children") {
          if (typeof value === "string") {
            element.innerHTML = value;
          } else if (Array.isArray(value)) {
            value.forEach((child) => {
              tljs.appendChild(element, child);
            });
          } else {
            tljs.appendChild(element, value);
          }
        } else if (key.startsWith("on")) {
          const eventName = key.substring(2).toLowerCase();
          element.addEventListener(eventName, value);
        } else {
          element.setAttribute(key, value);
        }
        console.log(`${tag.name}.createElement ${key} ${value}`);

      });
    }
    return element;
  }
}

export default tljs;
