import React from 'react';
import PropTypes from "prop-types";
import css from './ContactList.module.css';
import ContactElement from '../ContactElement/ContactElement';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => {
                return <ContactElement name={name} number={number} key={id} deleteContact={deleteContact} id={id} />
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;