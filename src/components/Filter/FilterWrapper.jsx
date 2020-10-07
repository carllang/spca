import React from 'react';
import styled from 'styled-components';

const ToolBarWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const FilterWrapper = ({ children }) => (
  <ToolBarWrapper>
    {children}
  </ToolBarWrapper>
);

export default FilterWrapper;
