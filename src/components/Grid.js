import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledDiv = styled.div({
  display: 'grid',
  gridGap: 10,
  gridTemplateColumns: 'repeat(4, 1fr)',
});

const Grid = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
);

Grid.propTypes = propTypes;

export default Grid;
