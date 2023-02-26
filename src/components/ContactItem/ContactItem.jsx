import PropTypes from 'prop-types';

import styles from '../App.module.css';

const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={styles.contactItem}>
      {name}: {number}
      <button
        className={styles.btnDelete}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  removeContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
