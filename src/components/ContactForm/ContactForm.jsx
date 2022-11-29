import React from 'react';
import PropTypes from "prop-types";
import css from './ContactForm.module.css';


class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    static defaultProps = {
        addContact: () => { }
    };

    static propTypes = {
        addContact: PropTypes.func,
    };

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onSubmitForm = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.addContact(name, number);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form className={css.form} onSubmit={this.onSubmitForm}>
                    <label>
                        <p className={css.title}>Name</p>
                        <input
                            className={css.inputPaper}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            onChange={this.onChange}
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
                            onChange={this.onChange}
                            value={number}
                            required
                        />
                    </label>

                    <button className={css.button} type="submit">Add contact</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;