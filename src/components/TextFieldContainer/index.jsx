import React from "react"
import styles from "./styles.module.scss"

class TextFieldContainer extends React.Component {
  state = {
    textFieldValue: "",
  }

  handleSearch = () => {
    this.props.onSearch(this.state.textFieldValue)
  }

  handleChange = event => {
    this.setState({ textFieldValue: event.target.value.toUpperCase() })
  }

  handleKeyPress = target => {
    if (target.charCode == 13) {
      this.props.onSearch(this.state.textFieldValue)
    }
  }

  render() {
    return (
      <section>
        <h2>Search games</h2>

        <div className={styles.searchBarWrapper}>
          <input
            onChange={this.handleChange}
            placeholder="Type here to search games"
            onKeyPress={this.handleKeyPress}
          />

          <div className={styles.searchBtn} onClick={this.handleSearch}>
            Search
          </div>
        </div>
      </section>
    )
  }
}

export default TextFieldContainer
