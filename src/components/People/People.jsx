import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ListView from './ListView';
import BlockView from './BlockView';
import ListOrBlockToggle from '../Toggle/ListOrBlockToggle';
import Pending from '../Pending/Pending';

const ToolBarWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const People = ({ people, view, pending }) => {
  const [result, setResult] = useState(people);
  useEffect(() => {
    people && setResult(people);
  }, [people]);

  const handleFilterInput = (e) => {
    const animalsFiltered = people ? people.filter((person) => person.firstName.toLowerCase().includes(e.target.value)) : [];
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
      {pending && <Pending />}
      {view === 'block' && <BlockView result={result} />}
      {view === 'list' && <ListView result={result} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  view: state.meta.listView.animals,
});

export default connect(mapStateToProps)(People);
