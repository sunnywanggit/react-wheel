//用于创建虚拟dom
import reactWheel from './lib/react-wheel'
//用于将虚拟dom渲染进dom树
import reactWheelDom from './lib/react-wheel-dom'


class App extends reactWheel.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'wangergou',
            job: '前端开发工程师'
        }

    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="title">hello <span>{this.state.name}</span></h1>
                <Job job={this.state.job}/>
            </div>
        )
    }
}

class Job extends reactWheel.Component {
    render() {
        return (
            <div className="job">我的工作是{this.props.job}</div>
        )
    }
}

reactWheelDom.render(<App/>, document.querySelector('#app'))
