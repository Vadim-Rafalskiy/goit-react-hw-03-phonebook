import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      removeContact={removeContact}
      id={id}
      name={name}
      number={number}
    />
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
