class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(partialState) {
    let newState = Object.assign({}, this.state, partialState);
    notifyUpdate(newState);
  }

}


/** 
 * xactElement = {
 *  type: string
 *  props: {
 *    attributes,
 *    listener,
 *    children: [xactElements]
 * }
 * }
*/

function createElement(tag, attributes, ...args) {
  let element = {};
  let props = {};
  if(args.length > 0) {
    args.forEach((item, index) => {
      let node = null;
      if(typeof item === "string"){
        node = {
          type: "TEXT_NODE",
          props: {
            nodeValue: item
          }
        }
      } else {
        node = item;
      }

      props.children?props.children.push(node):props.children=[node];
    })
  }
  if(attributes !== null) {
    Object.keys(attributes).forEach(key=>{
      props[key] = attributes[key];
    })
  }
  element.type = tag;
  element.props = props;
  return element;
}


export default {
  Component: Component,
  createElement: createElement
}

/*
xact element = {
  type: HTML tag name or TEXT_NODE,
  props: {

  }
}
*/


export class xactDOM {
  static render(ele, domContainer) {

  }
}

function notifyUpdate(state) {

}