import React from "react"
import styles from "./styles.module.scss"
import moment from "moment"
import Start from "./Start"

class RaceWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.getGame(props.gameId)
  }

  state = {
    game: undefined,
  }

  getGame = gameId => {
    try {
      fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(body => {
        body.json().then(data => this.setState({ game: data }))
      })
    } catch (err) {
      console.log("game not found", err)
    }
  }

  render() {
    const { game } = this.state

    return (
      <section className={styles.races}>
        {game && (
          <section>
            {game.races.map(race => (
              <section key={race.id} className={styles.raceContainer}>
                <div className={styles.rootInfo}>
                  <span className={styles.raceNumber}>{race.number}</span>

                  <div className={styles.raceInfo}>
                    <span>{race.name}</span>

                    <span className={styles.startDate}>
                      Startar: {moment(race.startTime).format("DD/MM HH:mm")}
                    </span>
                  </div>
                </div>

                <div>
                  {race.starts.map(start => (
                    <Start key={start.number} start={start} />
                  ))}
                </div>
              </section>
            ))}
          </section>
        )}
      </section>
    )
  }
}

export default RaceWrapper
