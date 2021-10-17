import React from 'react';
import PropTypes from 'prop-types';
import UncontrolledAlert from '@bit/reactstrap.reactstrap.uncontrolled-alert';

const Message = ({ msg }) => {
  return (
    <UncontrolledAlert color='info' fade={false}>
      {msg}
    </UncontrolledAlert>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;