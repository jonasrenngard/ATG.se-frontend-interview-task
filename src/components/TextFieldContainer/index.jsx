import React from "react"
import styles from "./styles.module.scss"
import Select from "react-select"

const OPTIONS = [
  { value: "V75", label: "V75" },
  { value: "V65", label: "V65" },
  { value: "V64", label: "V64" },
  { value: "V4", label: "V4" },
]

class TextFieldContainer extends React.Component {
  handleChange = option => {
    this.props.onSearch(option.value)
  }

  render() {
    return (
      <section>
        <h2>Search games</h2>

        <div className={styles.searchBarWrapper}>
          <Select options={OPTIONS} onChange={this.handleChange} />
        </div>
      </section>
    )
  }
}

export default TextFieldContainer
