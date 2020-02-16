//渲染虚拟dom

function render(vnode,container) {
    // 在每一次渲染之前先清空上一次渲染进去的东西,避免重复
    container.innerHTML = ''
    _render(vnode,container)
}

function _render(vnode, container) {
    //如果最后的叶子节点是一个字符串
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return container.appendChild(document.createTextNode(vnode))
    }

    if (typeof vnode === 'object') {
        let dom = document.createElement(vnode.tag)
        setAttribute(dom, vnode.attrs)
        if (vnode.children && Array.isArray(vnode.children)) {
            vnode.children.forEach(vnodeChild => {
                _render(vnodeChild, dom)
            })
        }
        container.appendChild(dom)
    }

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