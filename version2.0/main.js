import reactWheel from './lib/react-wheel'
import reactWheelDom from './lib/react-wheel-dom'

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
