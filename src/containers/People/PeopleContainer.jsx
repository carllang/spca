/* eslint-disable react/prefer-stateless-function */

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import People from '../../components/People/People';
import Pending from '../../components/Pending/Pending';
import useFetchPeopleData from '../../hooks/useFetchPeopleData';

const Container = styled.div`
  width: 100%;
`;

const PeopleContainer = () => {
  const { people, pending } = useFetchPeopleData();

  return (
    pending ? <Pending />
      : (
        <Container>
          <People people={people} />
        </Container>
      )
  );
};

export default PeopleContainer;
