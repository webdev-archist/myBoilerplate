// import App from "./src_react/App.js"

class Container extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello JSX and the World!</h1>
                <p>You can use this react starterkit to quickup things:<br/>
                </p>
                <ul>
                    <li>avec <a href="https://github.com/preactjs/wmr">wmr</a></li>
                    <li>ou avec <a href="https://github.com/developit/htm">html</a></li>
                    <li>...</li>
                </ul>
                
                {/* <App /> */}
            </div>
        );
    }
}

const Container_ = () => {
    return <div>react</div>
}

ReactDOM.render(<Container/>, app)