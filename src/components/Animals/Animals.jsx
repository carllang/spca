import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListView from './ListView';
import BlockView from './BlockView';

const ToolBarWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const Animals = ({ animals }) => {
  const [result, setResult] = useState(animals);
  const [listView, setListView] = useState(true);

  const handleFilterInput = (e) => {
    const animalsFiltered = animals.filter((animal) => animal.name.toLowerCase().includes(e.target.value));
    setResult(animalsFiltered);
  };

  const handleViewChange = (event, value) => {
    value === 'list' ? setListView(true) : setListView(false);
  };
  return (
    <div>
      <ToolBarWrapper>
        <TextField
          onChange={handleFilterInput}
          label="Filter results"
          variant="outlined"
        />
        <ToggleButtonGroup orientation="horizontal" value={listView ? 'list' : 'block'} exclusive onChange={(e, value) => handleViewChange(e, value)}>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="block" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </ToolBarWrapper>
      {!listView && <BlockView result={result} />}
      {listView && <ListView result={result} />}
    </div>
  );
};

export default Animals;
