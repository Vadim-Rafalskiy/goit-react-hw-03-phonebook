import PropTypes from 'prop-types';

import styles from '../App.module.css';

const PhoneBookFilter = ({ handleChange }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="">Find contacts by name</label>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default PhoneBookFilter;

PhoneBookFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
