import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const ContentWrapper = styled(DialogContent)`
  margin: 0 auto;
`;

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const Modal = ({
  title, children, isOpen, text, openModal, closeModal, actions,
}) => (
  <Dialog
    open={isOpen}
    onClose={closeModal}
    aria-labelledby="form-dialog-title"
    TransitionComponent={Transition}
  >
    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
    <ContentWrapper>
      <DialogContentText>
        {text}
      </DialogContentText>
      {children}
    </ContentWrapper>
    <DialogActions>
      {actions}
    </DialogActions>
  </Dialog>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  actions: PropTypes.element,
};

Modal.defaultProps = {
  actions: null,
};
export default Modal;
