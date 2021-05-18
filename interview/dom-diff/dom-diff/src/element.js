class Element {
    constructor(type, props, children) {
      this.type = type;
      this.props = props;
      this.children = children;
    }
    
  }
  const createElement = (type, props, children) => {
    return new Element(type, props, children);
  }
  
  const render=(domObj)=>{//结点 DOM 对象 jsx的本质是创建虚拟DOM树
      let el =document.createElement(domObj.type);
     for(let key in domObj.props){
         setAttr(el,key,domObj.props[key])
     }
     domObj.children.forEach(child=>{
         child=(child instanceof Element)?render(child):document.createTextNode(child);
         el.appendChild(child)
     })
     return el;
  }
const renderDOM=(el,target)=>{
    target.appendChild(el)
}


  function setAttr(node,key,value){
    switch(key){
        case 'value':
            if(node.tagName.toLowerCase()==='inpuut'||node.tagName.toLowerCase()==='textarea')
            {
                node.value=value
            }
            else{
                node.setAttribute(key,value)
            }
            break;
            case 'style':
                node.style.cssText=value
            default:
                node.setAttribute(key,value)
    }

  }

  export {
    createElement,
    render,
    renderDOM,

  }
  