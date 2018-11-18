import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Display from './Display';
import Grid from './Grid';

import { COLORS, SPACE } from '../data/styles';

const StyledDiv = styled.div({
  backgroundColor: COLORS.ACCENT,
  margin: '20px auto',
  maxWidth: 400,
  padding: SPACE.MEDIUM,
  width: '90vw',
});

const buttons = [
  { type: 'integer', value: 1 },
  { type: 'integer', value: 2 },
  { type: 'integer', value: 3 },
  { type: 'operator', value: '+' },
  { type: 'integer', value: 4 },
  { type: 'integer', value: 5 },
  { type: 'integer', value: 6 },
  { type: 'operator', value: '-' },
  { type: 'integer', value: 7 },
  { type: 'integer', value: 8 },
  { type: 'integer', value: 9 },
  { style: { gridRow: 'span 2' }, type: 'execute', value: '=' },
  { type: 'integer', value: 0 },
  { type: 'operator', value: '*' },
  { type: 'operator', value: '/' },
];

class Calculator extends Component {
  state = {
    currentOperator: null,
    pendingValue: 0,
    total: 20,
  }

  add = () => {
    const {
      pendingValue,
      total,
    } = this.state;
    this.setState({
      pendingValue: 0,
      total: Number(total) + Number(pendingValue),
    });
  }

  subtract = () => {
    const {
      pendingValue,
      total,
    } = this.state;
    this.setState({
      pendingValue: 0,
      total: Number(total) - Number(pendingValue),
    });
  }

  multiply = () => {
    const {
      pendingValue,
      total,
    } = this.state;
    this.setState({
      pendingValue: 0,
      total: Number(total) * Number(pendingValue),
    });
  }

  divide = () => {
    const {
      pendingValue,
      total,
    } = this.state;
    this.setState({
      pendingValue: 0,
      total: Number(total) / Number(pendingValue),
    });
  }

  execOperation = ({ newOperator = null }) => {
    const {
      currentOperator,
    } = this.state;

    this.setState({
      currentOperator: newOperator,
    }, () => {
      switch (currentOperator) {
        case '+':
          return this.add();
        case '-':
          return this.subtract();
        case '*':
          return this.multiply();
        case '/':
          return this.divide();
        default:
          return null;
      }
    });
  }

  handleClick = (button) => {
    const {
      currentOperator,
      pendingValue,
      total,
    } = this.state;

    const totalDisplay = total !== 0 ? String(total) : '';
    const pendingDisplay = pendingValue !== 0 ? String(pendingValue) : '';

    if (button.type === 'integer' && !currentOperator) {
      const newDisplay = `${totalDisplay}${button.value}`;
      this.setState({ total: newDisplay });
    } else if (button.type === 'operator' && !!currentOperator) {
      this.execOperation({ newOperator: button.value });
    } else if (button.type === 'integer' && !!currentOperator) {
      const newDisplay = `${pendingDisplay}${button.value}`;
      this.setState({ pendingValue: newDisplay });
    } else if (button.type === 'operator' && !currentOperator) {
      this.setState({ currentOperator: button.value });
    } else if (button.type === 'execute') {
      this.execOperation({});
    }
  }

  render() {
    const { pendingValue, total } = this.state;
    console.log(this.state);
    return (
      <StyledDiv>
        <Grid>
          <Display
            value={pendingValue ? String(pendingValue) : String(total)}
          />
          {buttons.map(button => (
            <Button
              key={button.value}
              onClick={() => this.handleClick({ ...button })}
              style={button.style}
              value={button.value}
            />
          ))}
        </Grid>
      </StyledDiv>
    );
  }
}

export default Calculator;
