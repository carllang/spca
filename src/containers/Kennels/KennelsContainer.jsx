/* eslint-disable react/prefer-stateless-function */

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Kennels from '../../components/Kennels';
import Pending from '../../components/Pending/Pending';
import useFetchKennelData from '../../hooks/useFetchData';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const KennelsContainer = () => {
  const { kennels, pending } = useFetchKennelData();

  return (
    pending ? <Pending />
      : (
        <Container>
          <Kennels kennels={kennels} />
        </Container>
      )
  );
};

export default KennelsContainer;
