import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import styled from "styled-components";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

// trying out the 'styled-components' library to replace h1.Game-gameover-text
const GameOverText = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map((d) => 1),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
      totalScore: 0,
      gameOver: false,
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.calcTotalScore = this.calcTotalScore.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
  }

  // called only after the very first render
  componentDidMount() {
    this.animateRoll();
  }

  // Not sure why async/await works, but it does...
  async animateRoll() {
    await this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
    this.calcTotalScore();
    this.checkGameOver();
  }

  checkGameOver() {
    const scoreValues = Object.values(this.state.scores);
    if (scoreValues.every((e) => e !== undefined)) {
      this.setState({ gameOver: true });
    }
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false,
    }));
  }

  toggleLocked(idx) {
    // guard against unlocking dice when 0 rolls are left
    if (this.state.rollsLeft === 0 || this.state.rolling) return;

    // toggle whether idx is in locked or not
    this.setState((st) => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1),
      ],
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.animateRoll();
  }

  calcTotalScore() {
    let total = 0;
    for (const score in this.state.scores) {
      if (this.state.scores[score] === undefined) {
        total += 0;
      } else {
        total += this.state.scores[score];
      }
    }
    this.setState({ totalScore: total });
  }

  gameReset() {
    // reloads the page to reset the state to its initial values
    window.location.reload();
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>
          {this.state.gameOver ? (
            <div>
              <GameOverText>Game Over!</GameOverText>
              <div className="Game-button-wrapper">
                <button className="Game-reroll" onClick={this.gameReset}>
                  Play again?
                </button>
              </div>
            </div>
          ) : (
            <section className="Game-dice-section">
              <Dice
                dice={this.state.dice}
                locked={this.state.locked}
                handleClick={this.toggleLocked}
                disabled={this.state.rollsLeft === 0}
                rolling={this.state.rolling}
              />
              <div className="Game-button-wrapper">
                <button
                  className="Game-reroll"
                  disabled={
                    this.state.locked.every((x) => x) ||
                    this.state.rollsLeft <= 0
                  }
                  onClick={this.animateRoll}
                >
                  {this.state.rollsLeft} Rerolls Left
                </button>
              </div>
            </section>
          )}
        </header>
        <ScoreTable
          doScore={this.doScore}
          scores={this.state.scores}
          totalScore={this.state.totalScore}
        />
      </div>
    );
  }
}

export default Game;
