import reactWheel from './lib/react-wheel'
import reactWheelDom from './lib/react-wheel-dom'


class App extends reactWheel.Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="title">wangergou <span>hello</span></h1>
                <Job/>
            </div>
        )
    }
}

class Job extends reactWheel.Component {
    render() {
        return (
            <div className="job">我的工作是前端工程师</div>
        )
    }
}

reactWheelDom.render(<App/>, document.querySelector('#app'))
