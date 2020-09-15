import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Pending from '../../components/Pending/Pending';
import useFetchKennelData from '../../hooks/fetchData';
import Kennels from '../../components/Kennels';

const Container = styled.div`
  display: flex;
`;

const KennelsWrapper = () => {
  const { kennels, pending } = useFetchKennelData();
  return (
    pending ? <Pending />
      : (
        <Container>
          <Kennels kennels={kennels} />
          <div>
            {' '}
            <AddIcon />
          </div>
        </Container>
      )

  );
};

export default KennelsWrapper;
