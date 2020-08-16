import React, { Component } from 'react';
import InputFullSalary from './components/Inputs/InputFullSalary';
import InputReadOnly from './components/Inputs/InputReadOnly';
import { calculateSalaryFrom } from './salary.js';
import Bar from './components/Bar/Bar';

export default class App extends Component {
  constructor() {
    super();

    const salary = calculateSalaryFrom(1000);
    salary.fullSalary = 1000;

    this.state = {
      salary,
    };
  }

  handleSalaryChange = (newFullSalary) => {
    const newSalary = calculateSalaryFrom(newFullSalary);
    newSalary.fullSalary = newFullSalary;

    this.setState({
      salary: newSalary,
    });
  };

  handlePercentage = (value) => {
    const percentage = (value * 100) / this.state.salary.fullSalary;
    return percentage;
    //return percentage.toFixed(2);
  };

  render() {
    const { salary } = this.state;
    const {
      fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = salary;

    return (
      <>
        <h2 style={styles.title}>React Salário</h2>

        <div className="container">
          <div className="row">
            <InputFullSalary
              value={fullSalary}
              description="Salário bruto"
              onSalaryChange={this.handleSalaryChange}
            />

            <InputReadOnly
              value={baseINSS}
              type="baseINSS"
              description="Base INSS:"
            />
            <InputReadOnly
              value={discountINSS}
              type="discountINSS"
              percentage={this.handlePercentage(discountINSS)}
              description="Desconto INSS:"
            />
            <InputReadOnly
              value={baseIRPF}
              type="baseIRPF"
              description="Base IRPF:"
            />
            <InputReadOnly
              value={discountIRPF}
              type="discountIRPF"
              percentage={this.handlePercentage(discountIRPF)}
              description="Desconto IRPF:"
            />
            <InputReadOnly
              value={netSalary}
              type="netSalary"
              percentage={this.handlePercentage(netSalary)}
              description="Salário Líquido:"
            />
          </div>

          <div className="row">
            <Bar
              discountINSSPercentage={this.handlePercentage(discountINSS)}
              discountIRPFPercentage={this.handlePercentage(discountIRPF)}
              netSalaryPercentage={this.handlePercentage(netSalary)}
            />
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center',
  },
};
