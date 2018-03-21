
/* element = {
  type: string, 
  props: object
} 
*/
function render(element, domContainer) {
  let children = [];
  let parentNode = domContainer || document.querySelector("body");
  let currentNode = null;
  if(element.type === "TEXT_NODE") {
    currentNode = document.createTextNode(element.props.nodeValue);
  } else {
    currentNode = document.createElement(element.type);
    let props = element.props || {};

    Object.keys(props).forEach(key => {
      if (/on/.test(key)) {
        const event = key.substring(2);
        currentNode.addEventListener(event, props[key])
      } else if(key !== "children") {
        currentNode.setAttribute(key, props[key]);
      } else {
        if(element.props.children.length > 0) {
          children = element.props.children;
          children.forEach(child => {
            render(child, currentNode);
          })
        }
      }
    });

  }


  domContainer.appendChild(currentNode);

  
}

export default {
  render: render
}