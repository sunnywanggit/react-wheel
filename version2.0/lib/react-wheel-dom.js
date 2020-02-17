function render(vnode, container) {
    //在再次将内容插入真实dom之前，先将dom树清空
    container.innerHTML = ''
    _render(vnode, container)
}

function _render(vnode, container) {
    let dom = createDomfromVnode(vnode)
    container.appendChild(dom)
}

function createDomfromVnode(vnode) {

    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return document.createTextNode(vnode)
    }

    if (typeof vnode === 'object') {

        // 如果标签是一个函数（组件）的时候我们如何去做
        if (typeof vnode.tag === 'function') {
            let dom = createComponent(vnode.tag, vnode.attrs)
            return dom
        }

        let dom = document.createElement(vnode.tag)
        setAttribute(dom, vnode.attrs)
        if (vnode.children && Array.isArray(vnode.children)) {
            vnode.children.forEach(vnodeChild => {
                _render(vnodeChild, dom)
            })
        }
        return dom
    }

}


//constructor 传进来的第一个参数是构造函数
function createComponent(constructor, attrs) {
    let component = new constructor(attrs)
    let vnode = component.render()
    let dom = createDomfromVnode(vnode)
    component.$root = dom
    return dom
}

function setAttribute(dom, attrs) {
    for (let key in attrs) {
        //事件绑定
        if (/^on/.test(key)) {
            dom[key.toLocaleLowerCase()] = attrs[key]
            // 样式
        } else if (key === 'style') {
            Object.assign(dom.style, attrs[key])
        } else {
            // 属性
            dom[key] = attrs[key]
        }
    }

}

export default {render}