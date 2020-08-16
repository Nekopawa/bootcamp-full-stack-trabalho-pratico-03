import React, { Component } from 'react';
import { formatSalary } from '../../helpers/formatHelper.js';
import css from './input.module.css';

export default class InputReadOnly extends Component {
  getClass = (type) => {
    return `css.${type}`;
  };

  render() {
    const { value, description, percentage, type } = this.props;

    return (
      <>
        <div className="col s12 m6 l3 input-field" style={styles.margin}>
          <p className={css.description}>{description}</p>
          <input
            type="text"
            className={css.readonly}
            style={
              type === 'baseINSS' || type === 'baseIRPF'
                ? styles.base
                : type === 'discountINSS'
                ? styles.discountINSS
                : type === 'discountIRPF'
                ? styles.discountIRPF
                : styles.netSalary
            }
            readOnly
            disabled
            value={`${formatSalary(value)} ${
              percentage ? `(${percentage.toFixed(2)} %)` : ''
            }`}
          ></input>
        </div>
      </>
    );
  }
}

const styles = {
  margin: {
    marginTop: '10px',
  },
  base: {
    color: 'black',
  },
  discountINSS: {
    color: '#e67e22',
  },
  discountIRPF: {
    color: '#c0392b',
  },
  netSalary: {
    color: '#16a085',
  },
};
