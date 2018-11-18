import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS, SPACE, FONT_SIZE } from '../data/styles';

const StyledDiv = styled.div({
  backgroundColor: COLORS.DARK,
  color: COLORS.LIGHT,
  fontSize: FONT_SIZE.LARGE,
  gridColumn: '1 / -1',
  padding: SPACE.MEDIUM,
  textAlign: 'right',
});

const propTypes = {
  value: PropTypes.string.isRequired,
};

const Display = ({
  value,
}) => (
  <StyledDiv>
    {value}
  </StyledDiv>
);

Display.propTypes = propTypes;

export default Display;
