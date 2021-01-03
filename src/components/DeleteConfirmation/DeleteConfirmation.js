import React from 'react';
import PropTypes from 'prop-types';

import { Alert, Intent } from '@blueprintjs/core';

const DeleteConfirmation = ({ children, handleCancel, handleDelete, isOpen }) => {
  return (
    <Alert
      canEscapeKeyCancel={true}
      canOutsideClickCancel={true}
      cancelButtonText="Cancelar"
      confirmButtonText="Excluir"
      icon="trash"
      intent={Intent.DANGER}
      isOpen={isOpen}
      onCancel={handleCancel}
      onConfirm={handleDelete}
    >
      {children}
    </Alert>
  );
}

DeleteConfirmation.defaultProps = {
  handleCancel: () => {},
  handleDelete: () => {},
  isOpen: false,
};

DeleteConfirmation.propTypes = {
  children: PropTypes.node.isRequired,
  handleCancel: PropTypes.func,
  handleDelete: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default DeleteConfirmation;
