import React from 'react'

class Counter extends React.Component {


    state = {
        number: this.props.number,
    }

    inc = () => this.setState({ number: this.state.number + 1 })
    incFive = () => this.setState({ number: this.state.number + 5 })
    dec = () => this.setState({ number: this.state.number - 1 })
    decFive = () => this.setState({ number: this.state.number - 5 })
    reset = () => this.setState({ number: this.props.number })

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>

                <button
                    onClick={this.inc}
                >
                    + 1
                </button>

                <button
                    onClick={this.incFive}
                >
                    + 5
                </button>

                <button
                    onClick={this.dec}
                >
                    - 1
                </button>

                <button
                    onClick={this.decFive}
                >
                    - 5
                </button>

                <button
                    onClick={this.reset}
                >
                    reset
                </button>
            </div>
        )
    }
}

Counter.defaultProps = {
    number: 0
}


export default Counter