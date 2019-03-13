import React from "react"
import TextFieldContainer from "components/TextFieldContainer"
import GameContainer from "components/GameContainer"
import styles from "./styles.module.scss"

class Dashboard extends React.Component {
  state = {
    product: undefined,
    errorMessage: "",
  }

  handleSearch = value => {
    fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${value}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(body => {
      body.json().then(data => {
        if (Object.keys(data).length > 0) {
          this.setState({ product: data, errorMessage: "" })
        } else {
          this.setState({
            errorMessage: "Could not find any races with that name",
            product: undefined,
          })
        }
      })
    })
  }

  render() {
    const { product, errorMessage } = this.state

    let nearest
    if (product) {
      if (product.upcoming) {
        nearest = product.upcoming.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )[0]
      } else {
        nearest = product.results.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )[0]
      }
    }

    return (
      <section>
        <TextFieldContainer onSearch={this.handleSearch} />

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        {product && (
          <section>
            <h2>
              {product.betType}{" "}
              {product.upcoming ? "Upcoming races" : "Results"}
            </h2>

            <React.Fragment>
              <GameContainer gameId={nearest.id} />
            </React.Fragment>
          </section>
        )}
      </section>
    )
  }
}

export default Dashboard
