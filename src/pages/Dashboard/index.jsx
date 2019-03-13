import React from "react"
import TextFieldContainer from "components/TextFieldContainer"
import GameContainer from "components/GameContainer"

class Dashboard extends React.Component {
  state = {
    product: undefined,
  }

  handleSearch = value => {
    try {
      fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${value}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(body => {
        body.json().then(data => this.setState({ product: data }))
      })
    } catch (err) {
      console.log("product not found", err)
    }
  }

  render() {
    const { product } = this.state

    let nearest
    if (product && product.upcoming) {
      nearest = product.upcoming.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )[0]
    }

    return (
      <section>
        <TextFieldContainer onTextFieldChange={this.handleSearch} />

        {product && (
          <section>
            <h2>{product.betType}</h2>

            {product.upcoming && (
              <React.Fragment>
                <GameContainer gameId={nearest.id} />
              </React.Fragment>
            )}
          </section>
        )}
      </section>
    )
  }
}

export default Dashboard
