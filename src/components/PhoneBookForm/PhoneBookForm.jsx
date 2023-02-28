import { Component } from 'react';

import PropTypes from 'prop-types';

import styles from '../App.module.css';

class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onSubmit, isDuplicate } = this.props;
    onSubmit({ ...this.state });
    if (!isDuplicate(name)) {
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Number</label>
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBookForm;

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isDuplicate: PropTypes.func.isRequired,
};
