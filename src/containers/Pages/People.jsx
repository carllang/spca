import React from 'react';
import styled from 'styled-components';
import People from '../../components/People/People';
import MainLayout from '../../components/Layout/MainLayout';
import useFetchPeopleData from '../../hooks/useFetchPeopleData';

const Container = styled.div`
  padding: 20px;
`;

const PeoplePage = () => {
  const { people, pending } = useFetchPeopleData();
  return (
    <MainLayout>
      <h2>People</h2>
      <Container>
        <People people={people} pending={pending} />
      </Container>
    </MainLayout>
  );
};

export default PeoplePage;
