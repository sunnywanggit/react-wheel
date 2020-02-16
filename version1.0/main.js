// 用于创建虚拟的dom树
const reactWheel = {
    createElement
}

// 渲染
const reactWheelDom = {
    render

}

/*tag 标签名 attrs 标签所具有的属性 children 孩子 */
function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

function render(vnode,container) {
    // 在每一次渲染之前先清空上一次渲染进去的东西,避免重复
    container.innerHTML = ''
    _render(vnode,container)
}

// vnode 就是虚拟dom，container就是将虚拟dom渲染为真实dom的容器
// console.log(element); 我把虚拟dom打印出来，供你写render函数的时候做判断

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

let name = 'wangergou'

function cliBtn() {
    console.log('cliBtn')
}

let objStyle = {
    color: 'red'
}


// jsx 会被 createElement 编译的到一个具有dom树结构的json对象，被编译出来的vnode 就叫做虚拟dom
let vnode = (
    <div className="div">
        <h1 style={objStyle}>hello{name}</h1>
        <button onClick={cliBtn}>clickme</button>
    </div>
)

reactWheelDom.render(vnode, document.querySelector('#app'))
