import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ListView from './ListView';
import BlockView from './BlockView';
import ListOrBlockToggle from '../Toggle/ListOrBlockToggle';

const ToolBarWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const Animals = ({ animals, view }) => {
  const [result, setResult] = useState(animals);

  const handleFilterInput = (e) => {
    const animalsFiltered = animals.filter((animal) => animal.name.toLowerCase().includes(e.target.value));
    setResult(animalsFiltered);
  };

  return (
    <div>
      <ToolBarWrapper>
        <TextField
          onChange={handleFilterInput}
          label="Filter results"
          variant="outlined"
        />
        <ListOrBlockToggle />
      </ToolBarWrapper>
      {view === 'block' && <BlockView result={result} />}
      {view === 'list' && <ListView result={result} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  view: state.meta.listView.animals,
});
export default connect(mapStateToProps)(Animals);
