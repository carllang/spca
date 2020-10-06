import React from 'react';
import { connect } from 'react-redux';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { TOGGLE_ANIMALS_LIST_VIEW } from '../../actions';

const ListOrBlockToggle = ({ view, setView }) => (
  <ToggleButtonGroup orientation="horizontal" value={view} exclusive onChange={(e, value) => value && setView(value)}>
    <ToggleButton value="list" aria-label="list">
      <ViewListIcon />
    </ToggleButton>
    <ToggleButton value="block" aria-label="module">
      <ViewModuleIcon />
    </ToggleButton>
  </ToggleButtonGroup>
);

const mapStateToProps = (state) => ({
  view: state.meta.listView.animals,
});
const mapDispatchToProps = (dispatch) => ({
  setView: (payload) => dispatch(TOGGLE_ANIMALS_LIST_VIEW(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListOrBlockToggle);
