import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.unlocked) {
      this.props.doScore();
      e.target.parentNode.classList.toggle("RuleRow-active");
      e.target.parentNode.classList.toggle("RuleRow-disabled");
    }

    this.setState({ unlocked: false });
  }

  render() {
    const { name, score, description, rolling } = this.props;
    return (
      <tr
        className="RuleRow RuleRow-active"
        onClick={rolling ? null : this.handleClick}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">
          {score === undefined ? description : score}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
