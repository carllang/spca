/* eslint-disable react/prefer-stateless-function */

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Kennels from '../../Components/Kennels';
import Pending from '../../Components/Pending/Pending';
import useFetchKennelData from '../../Hooks/fetchData';

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
