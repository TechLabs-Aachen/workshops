
window.currentComponent = null; // global variable

class SimpleState {
  constructor(value) {
    this.value = value;
    this.renderers = new Set()
  }

  registerRender() {
    console.log("CurrentComponent", window.currentComponent)
    this.renderers.add(currentComponent);
  }

  triggerRender() {
    this.renderers.forEach((renderer) => {
      renderer && renderer();
    })
  }

}

function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const stateGet = (simpleState) => ({
  get(target, key) {
    simpleState.registerRender();
    console.log("stateGet", target, key, target[key])
    return target[key];
  }
})

function stateSet(simpleState, proxyState) {
  return (newState) => {
    if (typeof newState === "function") {
      proxyState.value = newState(proxyState.value);
    } else {
      proxyState.value = newState;
    }
    simpleState.triggerRender();
    console.log("stateSet", proxyState.value);
  }
}


export function useState(initialValue) {
  const state = new SimpleState();
  const proxyState = new Proxy({ value: initialValue }, stateGet(state));
  return [() => () => proxyState.value, stateSet(state, proxyState)]
}

export function useEffect(callback) {
  console.log("tljs.createEffect", callback);
  callback();
}

function runRender(render) {
  window.currentComponent = render;
  console.log("runRender", window.currentComponent);
  currentComponent();
}


const tljs = {

  appendChild: (parent, child) => {
    console.log("tljs.appendChild", parent, child);
    if (Array.isArray(child)) {
      child.forEach((c, i) => {
        if (c.nodeType) {
          tljs.appendChild(parent, c)
        } else {
          console.log("tljs.appendChild string", c, parent.childNodes[i])
          if (parent.childNodes[i] && parent.childNodes[i].nodeValue === c) {
            // do nothing
          } else if (parent.childNodes[i]) {
            parent.childNodes[i].nodeValue = c;
          } else {
            tljs.appendChild(parent, c)
          }
        }
      });
    }
    else {
      if (child.nodeType) {
        console.log("tljs.appendChild nodeType", child);
        parent.appendChild(child);
      } else {
        const textNode = document.createTextNode(child);
        parent.appendChild(textNode);
      }
    }
  },

  createElement: (tag, props) => {
    console.log("tljs.createElement", tag, props);
    if (typeof tag === "function") {
      return tag(props);
    }

    const element = document.createElement(tag);
    runRender(() => {
      if (props) {
        Object.entries(props).forEach(([key, value]) => {
          if (key === "children") {
            console.log("tljs.createElement children", value);

            if (Array.isArray(value)) {
              const children = value.map((child) => {
                if (typeof child === "function") {
                  return child();
                }
                return child;
              });


              tljs.appendChild(element, children);
            } else {
              tljs.appendChild(element, value);
            }

          } else if (key.startsWith("on")) {
            console.log("tljs.createElement event", key, value);
            const eventName = key.substring(2).toLowerCase();
            element.addEventListener(eventName, value);
          } else {
            console.log("tljs.createElement attribute", key, value);
            element.setAttribute(key, value);
          }
        });
      }
    })

    return element;

  }
}

export default tljs;
