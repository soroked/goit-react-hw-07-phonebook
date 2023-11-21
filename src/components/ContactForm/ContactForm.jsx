import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [data, setData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  // getFormData = data => {
  //   const id = nanoid(8);
  //   const obj = { id, ...data };

  //   const normalizedName = data.name.toLowerCase();
  //   const nameExists = this.state.contacts.some(
  //     ({ name }) => name.toLowerCase() === normalizedName
  //   );
  //   if (nameExists) {
  //     alert(`${data.name} is already in contacts.`);
  //     return;
  //   }
  //   // ==================== /Task 5 ====================

  //   this.setState(prevState => {
  //     return { contacts: [obj, ...prevState.contacts] };
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid(8);
    const obj = { id, ...data };

    dispatch(addContact(obj));
    resetForm();
  };

  const resetForm = () => {
    setData({ name: '', number: '' });
  };

  const handleInputChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', width: 200 }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={data.name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label htmlFor="tel" style={{ marginTop: 20 }}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="tel"
        value={data.number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />
      <button style={{ marginTop: 20, width: 'fit-content' }}>
        Add contact
      </button>
    </form>
  );
};
