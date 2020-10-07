import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/dayjs';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {
  SET_ANIMAL_NAME_FILTER,
  SET_ANIMAL_AGE_FILTER,
  SET_ANIMAL_GENDER_FILTER,
  SET_ANIMAL_BREED_FILTER,
  SET_ANIMAL_SPECIES_FILTER,
  SET_ANIMAL_CREATED_FILTER,
} from '../../actions';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  div {
    margin-right: 20px;
  }
`;

const AnimalFilter = ({ setNameFilter }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <FilterContainer>
      <div>
        <TextField
          onChange={(e) => setNameFilter(e.target.value)}
          label="Filter by name"
          variant="outlined"
        />
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Filter by age"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'filter by age',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </FilterContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setNameFilter: (payload) =>
    dispatch(SET_ANIMAL_NAME_FILTER(payload)),
});

export default connect(null, mapDispatchToProps)(AnimalFilter);
