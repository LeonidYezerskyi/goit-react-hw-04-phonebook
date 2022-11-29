import React from 'react';
import PropTypes from "prop-types";
import css from './ContactElement.module.css';


const ContactElement = ({ name, number, id, deleteContact }) => {
    return (
        <li className={css.item} key={id}>{name}: {number}<button className={css.button} value={id} onClick={deleteContact}>Delete</button></li>
    )
}

ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactElement;

