import React, { useState } from 'react';
import PropTypes from "prop-types";
import css from './ContactForm.module.css';


const ContactForm = ({ addContact = () => { } }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const onSubmitForm = e => {
        e.preventDefault();
        addContact(name, number);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };


    return (
        <div>
            <form className={css.form} onSubmit={onSubmitForm}>
                <label>
                    <p className={css.title}>Name</p>
                    <input
                        className={css.inputPaper}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={onChange}
                        value={name}
                        required
                    />
                </label>
                <label>
                    <p className={css.title}>Number</p>
                    <input
                        className={css.inputPaper}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={onChange}
                        value={number}
                        required
                    />
                </label>

                <button className={css.button} type="submit">Add contact</button>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func,
};


export default ContactForm;