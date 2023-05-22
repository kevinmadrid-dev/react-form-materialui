import { Component } from "react"

class ComponentClass extends Component {
  constructor() {
    super()
    this.state = {
      contador: 0
    }
  }

  render() {
    return (
      <div>
        Component Class
        <p>
          <button
            onClick={() => this.setState({ contador: this.state.contador - 1 })}>
            -
          </button>
          {this.state.contador}
          <button
            onClick={() => this.setState({ contador: this.state.contador + 1 })}>
            +
          </button>
        </p>
      </div>
    )
  }
}

export default ComponentClass
