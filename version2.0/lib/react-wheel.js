
//创建虚拟dom
function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

// class App extends reactWheel.Component Component 就是用来构造组件的
class Component {
    constructor(props){
        this.props = props
        this.state = {}

        renderComponent()
    }
}

function renderComponent() {
    console.log('renderComponent');
}

export default  {createElement,Component}