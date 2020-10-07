import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ListView from './ListView';
import BlockView from './BlockView';
import ListOrBlockToggle from '../Toggle/ListOrBlockToggle';
import Pending from '../Pending/Pending';
import AnimalFilter from '../Filter/AnimalFilter';
import { getFilteredAnimals } from '../../selectors/animalSelectors';

const ToolBarWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const Animals = ({
  layoutView, pending, filteredAnimals,
}) => (
  <div>
    <ToolBarWrapper>
      <AnimalFilter />
      <ListOrBlockToggle />
    </ToolBarWrapper>

    {pending && <Pending />}
    {layoutView === 'block' && <BlockView result={filteredAnimals} />}
    {layoutView === 'list' && <ListView result={filteredAnimals} />}
  </div>
);
const mapStateToProps = (state) => ({
  layoutView: state.meta.listView.animals,
  filteredAnimals: getFilteredAnimals(state),
});

export default connect(mapStateToProps)(Animals);
