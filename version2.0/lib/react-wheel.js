
//创建虚拟dom
function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

export default  {createElement}