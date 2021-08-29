import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                description="1 point per 1"
                doScore={(evt) => doScore("ones", ones.evalRoll)}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                description="2 points per 2"
                doScore={(evt) => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                description="3 points per 3"
                doScore={(evt) => doScore("threes", threes.evalRoll)}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                description="4 points per 4"
                doScore={(evt) => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                description="5 points per 5"
                doScore={(evt) => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                description="6 points per 6"
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                description="Sum all dice if 3 are the same"
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                description="Sum all dice if 4 are the same"
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                description="25 points for a full house"
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                description="30 points for a small straight"
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                description="40 points for a large straight"
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                description="50 points for a yahtzee"
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                description="Sum of all dice"
                doScore={(evt) => doScore("chance", chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
