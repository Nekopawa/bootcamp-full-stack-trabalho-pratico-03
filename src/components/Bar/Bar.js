import React, { Component } from 'react';
import css from './bar.module.css';

export default class Bar extends Component {
  render() {
    const {
      discountINSSPercentage,
      discountIRPFPercentage,
      netSalaryPercentage,
    } = this.props;

    return (
      <div className="col s12">
        <div
          className={`${css.discountINSS} ${css.bar}`}
          style={{ width: `${discountINSSPercentage}%` }}
        >
          &nbsp;
        </div>
        <div
          className={`${css.discountIRPF} ${css.bar}`}
          style={{ width: `${discountIRPFPercentage}%` }}
        >
          &nbsp;
        </div>
        <div
          className={`${css.netSalary} ${css.bar}`}
          style={{
            heigth: '10px',
            width: `${netSalaryPercentage}%`,
          }}
        >
          &nbsp;
        </div>
      </div>
    );
  }
}
