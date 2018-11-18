import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS, FONT_SIZE, SPACE } from '../data/styles';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

const StyledButton = styled.button({
  backgroundColor: COLORS.DARK,
  color: COLORS.LIGHT,
  fontSize: FONT_SIZE.LARGE,
  padding: SPACE.MEDIUM,
});

const Button = ({
  onClick,
  value,
  ...props
}) => (
  <StyledButton
    onClick={onClick}
    {...props}
  >
    {value}
  </StyledButton>
);

Button.propTypes = propTypes;

export default Button;
