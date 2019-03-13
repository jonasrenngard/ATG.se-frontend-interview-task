import React from "react"
import styles from "./styles.module.scss"

class Start extends React.Component {
  state = {
    menuIsExpanded: false,
  }

  toggleMenu = () => {
    this.setState({ menuIsExpanded: !this.state.menuIsExpanded })
  }

  render() {
    const { start, start: { driver, horse } } = this.props
    const { menuIsExpanded } = this.state

    return (
      <section className={styles.container}>
        <section className={styles.startContainer} onClick={this.toggleMenu}>
          <span className={styles.startNumber}>{start.number}</span>

          <div className={styles.horseWrapper}>
            <span className={styles.horseName}>{horse.name}</span>

            <span>
              {driver.firstName} {driver.lastName}
            </span>
          </div>

          <div
            className={
              menuIsExpanded ? styles.toggleIconExpanded : styles.toggleIcon
            }
          >
            >
          </div>
        </section>

        {menuIsExpanded && (
          <section className={styles.expandableMenu}>
            <div>
              Trainer: {horse.trainer.firstName} {horse.trainer.lastName}
            </div>

            <div>Father: {horse.pedigree.father.name}</div>
          </section>
        )}
      </section>
    )
  }
}

export default Start
