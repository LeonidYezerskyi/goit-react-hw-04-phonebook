import React from 'react';
import PropTypes from "prop-types";
import css from './Filter.module.css';


const Filter = ({ filter, onChangeFilter }) => {

    return (
        <div >
            <label className={css.filterBox}>
                <p className={css.title}>Find contacts by name</p>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={onChangeFilter}
                    value={filter}
                    required
                />
            </label>
        </div>
    )
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;