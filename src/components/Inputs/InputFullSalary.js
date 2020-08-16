import React, { Component } from 'react';
import css from './input.module.css';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const fullSalary = event.target.value;
    this.props.onSalaryChange(fullSalary);
  };

  render() {
    const { value, description } = this.props;

    return (
      <div className="col s12 input-field">
        <p className={css.description}>{description}</p>
        <input
          type="number"
          value={value}
          step="100"
          min="0"
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}
