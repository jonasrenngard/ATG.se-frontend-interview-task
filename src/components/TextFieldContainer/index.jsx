import React from "react"

class TextFieldContainer extends React.Component {
  handleChange = event => {
    this.props.onTextFieldChange(event.target.value.toUpperCase())
  }

  render() {
    return (
      <section>
        <h2>Search games</h2>

        <input onChange={this.handleChange} />
      </section>
    )
  }
}

export default TextFieldContainer
